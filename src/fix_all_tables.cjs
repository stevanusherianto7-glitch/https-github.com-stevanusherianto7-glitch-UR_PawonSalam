const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('src/components').filter(f => f.endsWith('.tsx'));

for (const f of files) {
  const file = path.join('src/components', f);
  let content = fs.readFileSync(file, 'utf8');

  // Change font sizes in tables
  content = content.replace(/py-4 px-6/g, 'py-3 px-6 text-[13px]');
  content = content.replace(/py-4 px-4/g, 'py-3 px-4 text-[13px]');
  content = content.replace(/py-4 px-2/g, 'py-3 px-2 text-[13px]');
  content = content.replace(/py-3/g, 'py-2.5'); // even tighter

  // Just to clear out multiple classes if any
  content = content.replace(/text-\[13px\] text-\[13px\]/g, 'text-[13px]');

  fs.writeFileSync(file, content);
}
