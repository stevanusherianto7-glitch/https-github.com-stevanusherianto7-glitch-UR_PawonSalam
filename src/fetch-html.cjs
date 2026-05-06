async function run() {
  const res = await fetch('https://partner.ur-hub.com/static/js/main.8e71e0ab.chunk.js');
  const text = await res.text();
  const res2 = await fetch('https://partner.ur-hub.com/static/js/25.f7ac537f.chunk.js');
  const text2 = await res2.text();
  console.log('main contains "UR": ', text.indexOf('"UR"'));
  console.log('25 contains "UR": ', text2.indexOf('"UR"'));
  
  // Try to find the react component for 'Logo'
  const logoMatch = text.match(/Logo.*?function/i);
  if (logoMatch) console.log('Found logo component in main', logoMatch);
}
run();
