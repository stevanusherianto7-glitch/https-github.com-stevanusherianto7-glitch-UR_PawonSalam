const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    content = content.replace(/#de148c/gi, '#10b981'); // emerald-500
    content = content.replace(/#fceef5/gi, '#ecfdf5'); // emerald-50
    content = content.replace(/#fbcfe8/gi, '#a7f3d0'); // emerald-200
    content = content.replace(/#b0106f/gi, '#059669'); // emerald-600
    content = content.replace(/bg-pink-/g, 'bg-emerald-');
    content = content.replace(/text-pink-/g, 'text-emerald-');
    content = content.replace(/border-pink-/g, 'border-emerald-');
    content = content.replace(/border-gray-200 focus:border-\[\#10b981\]/g, 'border-gray-200 focus:border-[#10b981]');
    
    // There may be instances of `to-[#ecfdf5]` inside `DaftarTransaksi`
    // Wait, replacing fceef5 with ecfdf5 directly is fine.
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
