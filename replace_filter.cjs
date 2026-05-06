const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('Filter')) {
    // Replace Import
    // Might have { Search, Filter } or { Filter } etc
    content = content.replace(/import\s+\{([^}]*?)Filter([^}]*?)\}\s+from\s+['"]lucide-react['"];/g, (match, p1, p2) => {
      // Check if ListFilter is already there
      if(match.includes('ListFilter')) return match;
      const inner = p1 + 'ListFilter' + p2;
      return `import {${inner}} from 'lucide-react';`;
    });

    // Strategy 1: The one with <div className="flex items-center space-x-1 border-b border-gray-300 pb-1"> wrap
    // Like in Surcharges.tsx
    content = content.replace(/<div className="flex items-center space-x-1 border-b border-gray-300 pb-1">\s*<Filter size=\{16\} className="text-gray-400" \/>\s*<\/div>/g, 
    `<div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={16} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-700 w-full group-hover:border-black"></div>
                  </div>`);

    // Strategy 2: BiayaOperasional style
    // <Filter className="w-4 h-4 mt-2 text-gray-500 cursor-pointer" />
    // <div className="h-px w-full bg-gray-300 mt-1"></div>
    content = content.replace(/<Filter className="w-4 h-4 mt-2 text-gray-500 cursor-pointer" \/>\s*<div className="h-px w-full bg-gray-300 mt-1"><\/div>/g, 
    `<div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-700 w-full group-hover:border-black"></div>
                    </div>`);

    // Any other lone <Filter...>
    content = content.replace(/<Filter /g, '<ListFilter ');

    fs.writeFileSync(filePath, content, 'utf8');
  }
}
