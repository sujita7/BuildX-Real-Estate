const fs = require('fs');

function htmlToJsx(html) {
  let jsx = html;
  
  // Basic replacements
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
  jsx = jsx.replace(/<!--.*?-->/g, ''); // Remove comments
  jsx = jsx.replace(/nomodule=\"\"/g, 'noModule={true}');
  jsx = jsx.replace(/async=\"\"/g, 'async={true}');
  jsx = jsx.replace(/muted=\"\"/g, 'muted={true}');
  jsx = jsx.replace(/loop=\"\"/g, 'loop={true}');
  jsx = jsx.replace(/hidden=\"\"/g, 'hidden={true}');
  
  // Close void elements
  const voidTags = ['img', 'input', 'br', 'hr', 'link', 'meta', 'source'];
  voidTags.forEach(tag => {
    const regex = new RegExp('<' + tag + '([^>]*?)(?<!/)>', 'gi');
    jsx = jsx.replace(regex, '<' + tag + '$1 />');
  });
  
  // Handle inline styles (rudimentary)
  jsx = jsx.replace(/style=\"([^\"]*)\"/g, (match, p1) => {
    if (!p1.trim()) return 'style={{}}';
    const rules = p1.split(';').filter(r => r.trim());
    const styleObj = rules.map(rule => {
      let [key, val] = rule.split(':');
      if(!val) return '';
      key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      val = val.trim();
      return `${key}: '${val}'`;
    }).join(', ');
    return `style={{${styleObj}}}`;
  });
  
  // Replace links from `./filename.html` to `/filename`
  jsx = jsx.replace(/href=\"\.\/([a-zA-Z0-9-]+)\.html\"/g, (match, p1) => {
    if(p1 === 'index') return 'href=\"/\"';
    return `href=\"/${p1}\"`;
  });

  // Replace Link component usage
  jsx = jsx.replace(/<a ([^>]*)href=\"([^\"]*)\"([^>]*)>/g, '<Link $1href=\"$2\"$3>');
  jsx = jsx.replace(/<\/a>/g, '</Link>');
  
  // Fix attributes that might have boolean values like aria-expanded="false" to JSX
  // Actually aria- attributes are perfectly fine as strings in React.

  return jsx;
}

let headerHtml = fs.readFileSync('header.html', 'utf8');
let headerJsx = htmlToJsx(headerHtml);

// Wrap header in a React component
let headerComponent = `'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      ${headerJsx}
    </>
  );
}
`;

headerComponent = headerComponent.replace('<button className=\"burger-btn_btn__IvzqD', '<button onClick={toggleMenu} className=\"burger-btn_btn__IvzqD');
headerComponent = headerComponent.replace(/data-state=\"closed\"/g, 'data-state={menuOpen ? \"open\" : \"closed\"}');

fs.writeFileSync('components/Header.jsx', headerComponent);

let footerHtml = fs.readFileSync('footer.html', 'utf8');
let footerJsx = htmlToJsx(footerHtml);

let footerComponent = `import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    ${footerJsx}
  );
}
`;

fs.writeFileSync('components/Footer.jsx', footerComponent);
console.log('Created Header and Footer components');
