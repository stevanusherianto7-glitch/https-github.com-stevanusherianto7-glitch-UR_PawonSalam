import fs from 'fs';
import path from 'path';

function findFiles(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, filter, fileList);
    } else if (filter.test(filePath)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const filesToProcess = findFiles('src/components', /\.tsx$/);

for (const file of filesToProcess) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Modernize white buttons
  content = content.replace(/bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm/g, 'bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all');
  content = content.replace(/bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50/g, 'bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer hover:bg-gray-50');
  content = content.replace(/bg-white border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg shadow-sm/g, 'bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all');

  // Any text-gray-600 and text-[#3B415A] in td tags, let's leave it alone, but headers: text-gray-500
  // "text-[#3B415A]" -> "text-gray-800"
  content = content.replace(/text-\[#3B415A\]/g, 'text-gray-800');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
  }
}
