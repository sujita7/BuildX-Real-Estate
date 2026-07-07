const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'app/agents/page.js');
let content = fs.readFileSync(pagePath, 'utf8');

const agentGridRegex = /<div className="grid-skeleton_grid__evAfN">[\s\S]*?(?=<\/div>\s*<\/div>\s*<div className="certified-agents_pagination__v422k">)/;

const newGridContent = `
<div className="grid-skeleton_grid__evAfN" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
    <div key={i} className="agent" style={{ borderRadius: '12px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <div style={{ height: '280px', width: '100%', overflow: 'hidden' }}>
        <img 
          src="/images/businesswomen_talking_walking_together_city_b99be30d39.jpg" 
          alt="Agent" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="card_content__48mMW" style={{ padding: '20px' }}>
        <div className="card_name__zxWBM" style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '8px' }}>
          {["Sarah Jenkins", "Michael Chang", "David Reynolds", "Emma Watson", "James Lee", "Olivia Martin", "Daniel Smith", "Sophia Taylor"][i-1]}
        </div>
        <div className="card_rating__GAMde" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffb400' }}>
          <span>★★★★★</span>
          <span className="card_rating-votes__R9bLQ" style={{ color: '#666', fontSize: '0.9rem' }}>80 reviews</span>
        </div>
      </div>
    </div>
  ))}
`;

if (content.match(agentGridRegex)) {
  content = content.replace(agentGridRegex, newGridContent);
  fs.writeFileSync(pagePath, content);
  console.log('Successfully replaced skeleton grid with actual agents in app/agents/page.js');
} else {
  console.log('Could not find the skeleton grid in app/agents/page.js');
}
