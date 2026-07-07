const fs = require('fs');
const path = require('path');

const srcDir = '../home-page';
const destDir = 'app';

function htmlToJsx(html) {
  let jsx = html;
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/fill-rule/g, 'fillRule');
  jsx = jsx.replace(/clip-rule/g, 'clipRule');
  jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
  jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
  jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
  jsx = jsx.replace(/autoplay/g, 'autoPlay');
  jsx = jsx.replace(/playsinline/g, 'playsInline');
  jsx = jsx.replace(/crossorigin/g, 'crossOrigin');
  jsx = jsx.replace(/tabindex/g, 'tabIndex');
  jsx = jsx.replace(/<!--.*?-->/g, ''); 
  jsx = jsx.replace(/nomodule=\"\"/g, 'noModule={true}');
  jsx = jsx.replace(/async=\"\"/g, 'async={true}');
  jsx = jsx.replace(/muted=\"\"/g, 'muted={true}');
  jsx = jsx.replace(/loop=\"\"/g, 'loop={true}');
  jsx = jsx.replace(/hidden=\"\"/g, 'hidden={true}');
  
  const voidTags = ['img', 'input', 'br', 'hr', 'link', 'meta', 'source'];
  voidTags.forEach(tag => {
    const regex = new RegExp('<' + tag + '([^>]*?)(?<!/)>', 'gi');
    jsx = jsx.replace(regex, '<' + tag + '$1 />');
  });
  
  jsx = jsx.replace(/style=\"([^\"]*)\"/g, (match, p1) => {
    if (!p1.trim()) return 'style={{}}';
    const rules = p1.split(';').filter(r => r.trim());
    const styleObj = rules.map(rule => {
      let [key, val] = rule.split(':');
      if(!val) return '';
      key = key.trim();
      if(key.startsWith('--')) {
        // custom property, keep as is
        return `'${key}': '${val.trim()}'`;
      }
      key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      return `${key}: '${val.trim()}'`;
    }).join(', ');
    return `style={{${styleObj}}}`;
  });
  
  jsx = jsx.replace(/href=\"\.\/([a-zA-Z0-9-]+)\.html\"/g, (match, p1) => {
    if(p1 === 'index') return 'href=\"/\"';
    if(p1 === 'commericial') return 'href=\"/commercial\"';
    return `href=\"/${p1}\"`;
  });

  jsx = jsx.replace(/<a ([^>]*)href=\"([^\"]*)\"([^>]*)>/g, '<Link $1href=\"$2\"$3>');
  jsx = jsx.replace(/<\/a>/g, '</Link>');
  return jsx;
}

const htmlFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

// Extract Footer from index.html
let indexContent = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf8');
let footerStart = indexContent.indexOf('<div class="footer_wrapper__');
let footerEnd = indexContent.lastIndexOf('</div>', indexContent.indexOf('</main>')); // Just take the rest of main? No, footer is the last child of main.
// To safely get footer, we just split at footer_wrapper
let footerHtml = indexContent.substring(footerStart, indexContent.indexOf('</main>'));

let footerJsx = htmlToJsx(footerHtml);
let footerComponent = `import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
    ${footerJsx}
    </>
  );
}
`;
fs.writeFileSync('components/Footer.jsx', footerComponent);

htmlFiles.forEach(file => {
  let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  let mainStart = content.indexOf('<main>');
  let mainEnd = content.indexOf('</main>');
  if(mainStart === -1 || mainEnd === -1) {
    return;
  }
  
  // Cut out footer from main
  let localFooterStart = content.indexOf('<div class="footer_wrapper__', mainStart);
  let mainContent;
  if(localFooterStart !== -1 && localFooterStart < mainEnd) {
    mainContent = content.substring(mainStart, localFooterStart) + '</main>';
  } else {
    mainContent = content.substring(mainStart, mainEnd + 7);
  }
  
  let jsx = htmlToJsx(mainContent);
  
  let routeName = file.replace('.html', '');
  if(routeName === 'commericial') routeName = 'commercial';

  let pageComponent = `import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      ${jsx}
      <Footer />
    </>
  );
}
`;

  if(routeName === 'index') {
    fs.writeFileSync(path.join(destDir, 'page.js'), pageComponent);
  } else {
    let routeDir = path.join(destDir, routeName);
    if(!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir);
    }
    fs.writeFileSync(path.join(routeDir, 'page.js'), pageComponent);
  }
});
console.log('Fixed and regenerated components and pages.');
