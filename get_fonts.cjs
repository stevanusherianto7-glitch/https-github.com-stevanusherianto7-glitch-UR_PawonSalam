const https = require('https');
const options = {
  hostname: 'fonts.googleapis.com',
  path: '/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
