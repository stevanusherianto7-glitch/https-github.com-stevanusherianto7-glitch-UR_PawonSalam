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

  // Replacements
  content = content.replace(/bg-white rounded-lg border border-gray-200 shadow-sm/g, 'bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]');
  content = content.replace(/bg-white rounded-xl border border-gray-200 shadow-sm/g, 'bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]');
  content = content.replace(/bg-white rounded-lg shadow-sm border border-gray-200/g, 'bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]');
  content = content.replace(/bg-white shadow-sm border border-gray-200 rounded-lg/g, 'bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]');

  // headers
  content = content.replace(/bg-\[#d1fae5\] px-6 py-2\.5 border-b border-gray-200/g, 'px-6 py-4 border-b border-gray-100 bg-gray-50/50');
  content = content.replace(/bg-\[#ecfdf5\] px-6 py-4 border-b border-gray-200/g, 'px-6 py-4 border-b border-gray-100 bg-gray-50/50');
  content = content.replace(/bg-\[#ecfdf5\] px-6 py-2\.5 border-b border-gray-200/g, 'px-6 py-4 border-b border-gray-100 bg-gray-50/50');
  content = content.replace(/bg-\[#d1fae5\] border border-\[#a7f3d0\] rounded-xl p-5/g, 'bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] p-6');
  content = content.replace(/bg-\[#ecfdf5\] border border-\[#d1fae5\] rounded-xl p-5/g, 'bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] p-6');
  content = content.replace(/bg-\[#ecfdf5\] border border-\[#a7f3d0\] rounded-xl p-5/g, 'bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] p-6');

  // Typography
  content = content.replace(/text-base font-medium text-\[#3B415A\]/g, 'text-[15px] font-bold text-gray-900');
  content = content.replace(/text-\[28px\] font-medium text-\[#3B415A\]/g, 'text-2xl font-bold text-gray-900 tracking-tight');
  content = content.replace(/text-\[28px\] font-semibold text-\[#3B415A\]/g, 'text-2xl font-bold text-gray-900 tracking-tight');
  content = content.replace(/text-\[28px\] font-bold text-\[#3B415A\]/g, 'text-2xl font-bold text-gray-900 tracking-tight');
  content = content.replace(/text-\[28px\] font-semibold text-\[#10b981\]/g, 'text-2xl font-bold text-gray-900 tracking-tight');
  content = content.replace(/text-\[28px\] font-medium text-\[#202224\]/g, 'text-2xl font-bold text-gray-900 tracking-tight');

  // Other spacing and colors
  content = content.replace(/bg-\[#F8F9FB\]/g, 'bg-[#FAFAFA]');
  content = content.replace(/border-gray-100 shadow-sm/g, 'border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]');

  // Dashboard fixes that were previously `border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] h-[350px] flex flex-col` etc
  // We don't want to replace those since they are already right

  if (content !== original) {
    fs.writeFileSync(file, content);
  }
}
