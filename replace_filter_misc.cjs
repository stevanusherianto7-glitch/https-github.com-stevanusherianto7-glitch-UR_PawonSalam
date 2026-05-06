const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('border-gray-300 pb-1') && content.includes('ListFilter')) {
    content = content.replace(/<div className="flex items-center space-x-1 border-b border-gray-300 pb-1[^"]*">\s*<ListFilter size=\{16\} className="text-gray-400" \/>\s*<\/div>/g, 
    `<div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>`);
    // And also replace the other one in case it was already converted but I want to use `border-gray-300 w-full` to match LaporanShift exactly
    content = content.replace(/<div className="flex flex-col group cursor-pointer" title="Filter">\s*<ListFilter size=\{16\} className="text-gray-700 mb-1" \/>\s*<div className="border-b border-gray-700 w-full group-hover:border-black"><\/div>\s*<\/div>/g,
    `<div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>`);
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
