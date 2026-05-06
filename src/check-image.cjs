const fs = require('fs');

const data = fs.readFileSync('public/logo.png');
console.log('Size:', data.length);
// magic bytes
console.log('Magic:', data.slice(0, 4).toString('hex'));
