const fs = require('fs');

const COLORS_CODE = `
const CHART_COLORS = [
  '#0ea5e9', // Sky 500
  '#f59e0b', // Amber 500
  '#ec4899', // Pink 500
  '#8b5cf6', // Violet 500
  '#10b981', // Emerald 500
  '#f43f5e', // Rose 500
  '#3b82f6', // Blue 500
  '#14b8a6', // Teal 500
  '#eab308', // Yellow 500
  '#d946ef', // Fuchsia 500
  '#ef4444', // Red 500
  '#a855f7', // Purple 500
];
`;

function addColorsCode(content) {
  if (content.includes('CHART_COLORS')) return content;
  // insert after last import
  const lastImportIndex = content.lastIndexOf('import ');
  const endOfLastImport = content.indexOf('\n', lastImportIndex);
  return content.slice(0, endOfLastImport + 1) + COLORS_CODE + content.slice(endOfLastImport + 1);
}

function replaceBarsInContent(content, datasetMap) {
  // We need to replace:
  // <Bar dataKey="value" fill="#10b981" radius={[0, 0, 0, 0]} />
  // with:
  // <Bar dataKey="value" radius={[0, 0, 0, 0]}>
  //   {DATA_VAR.map((entry, index) => <Cell key={\`cell-\${index}\`} fill={CHART_COLORS[index % CHART_COLORS.length]} />)}
  // </Bar>
  
  // Also we need to know the DATA_VAR from the closest <BarChart data={...} above the <Bar /> tag.
  
  const regex = /<BarChart\s+[^>]*?data={([A-Z0-9_]+)}[\s\S]*?<Bar\s+dataKey="([^"]+)"[^>]*?fill="#[a-zA-Z0-9]+"([^>]*?)\/>/g;
  
  return content.replace(regex, (match, dataVar, dataKey, restOfProps) => {
    // some tags might have self-closing slash in restOfProps if it's <Bar ... /> 
    let cleanProps = restOfProps.trim();
    if (cleanProps.endsWith('/')) {
      cleanProps = cleanProps.slice(0, -1).trim();
    }
    
    // For Pemasukan Harian, maybe we should fix the `maxBarSize` spacing.
    const newBar = `<Bar dataKey="${dataKey}" ${cleanProps}>
                {${dataVar}.map((entry, index) => <Cell key={\`cell-\${index}\`} fill={CHART_COLORS[index % CHART_COLORS.length]} />)}
              </Bar>`;
              
    // we need to return everything except the <Bar ... /> tag, so we recreate the start
    // wait, the regex matches from <BarChart to <Bar />
    // It's safer to just replace the <Bar /> if we know what data to use.
    
    const parts = match.split(/<Bar\s+/);
    return parts[0] + newBar.replace('<Bar dataKey=', '<Bar dataKey=');
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = addColorsCode(content);
  
  content = replaceBarsInContent(content);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

processFile('./src/components/NilaiStok.tsx');

