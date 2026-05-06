const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/border-gray-700 w-full group-hover:border-black/g, 'border-gray-300 w-full group-hover:border-black');
  fs.writeFileSync(filePath, content, 'utf8');
}
