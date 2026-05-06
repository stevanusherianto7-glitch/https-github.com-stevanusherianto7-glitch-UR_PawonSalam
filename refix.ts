import fs from 'fs';
import path from 'path';

const files = [
  'src/components/Dashboard.tsx',
  'src/components/Pemasukan.tsx'
];

files.forEach(f => {
  const filePath = path.join(process.cwd(), f);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\(_, index\) => <Cell key={`cell-\${index}`} fill={entry\.color} \/>/g, '(entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />');
  fs.writeFileSync(filePath, content);
  console.log(`Re-fixed ${f}`);
});
