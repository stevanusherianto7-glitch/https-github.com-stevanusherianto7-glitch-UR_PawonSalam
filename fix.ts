import fs from 'fs';
import path from 'path';

const files = [
  'src/components/Dashboard.tsx',
  'src/components/Pemasukan.tsx',
  'src/components/NilaiStok.tsx'
];

files.forEach(f => {
  const filePath = path.join(process.cwd(), f);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\(entry, index\) => <Cell/g, '(_, index) => <Cell');
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${f}`);
});
