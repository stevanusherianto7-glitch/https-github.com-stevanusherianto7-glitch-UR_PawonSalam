const fs = require('fs');
const files = [
  'src/components/LabaKotor.tsx',
  'src/components/LabaBersih.tsx',
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Change table to smaller padding
  content = content.replace(/py-4 px-4/g, 'py-2.5 px-6');
  
  // Make left column font normal text-gray-600
  content = content.replace(/className="py-2.5 px-6 font-medium text-\[#3B415A\]">/g, 'className="py-2.5 px-6 text-gray-600">');
  content = content.replace(/className="py-2.5 px-6 font-bold text-\[#3B415A\]">/g, 'className="py-2.5 px-6 text-gray-600">');
  
  // For Totals
  content = content.replace(/<td className="py-2.5 px-6 text-gray-600">Laba Kotor<\/td>/g, '<td className="py-2.5 px-6 font-medium text-[#3B415A]">Laba Kotor</td>');
  content = content.replace(/<td className="py-2.5 px-6 text-gray-600">Laba Bersih<\/td>/g, '<td className="py-2.5 px-6 font-medium text-[#3B415A]">Laba Bersih</td>');
  content = content.replace(/<td className="py-2.5 px-6 text-gray-600">Penjualan Bersih<\/td>/g, '<td className="py-2.5 px-6 font-medium text-[#3B415A]">Penjualan Bersih</td>');
  
  // Fix background hover colors
  content = content.replace(/ hover:bg-gray-100 transition-colors cursor-default/g, '');
  content = content.replace(/ hover:bg-gray-200 transition-colors cursor-default/g, '');
  
  // Also remove backgrounds on td if any
  content = content.replace(/ bg-gray-100\/50/g, '');

  fs.writeFileSync(file, content);
}
