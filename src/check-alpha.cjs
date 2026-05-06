const fs = require('fs');
const { PNG } = require('pngjs');

fs.createReadStream('public/logo.png')
  .pipe(new PNG())
  .on('parsed', function() {
    let minX = this.width, minY = this.height, maxX = 0, maxY = 0;
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let idx = (this.width * y + x) << 2;
        let r = this.data[idx];
        let g = this.data[idx+1];
        let b = this.data[idx+2];
        let a = this.data[idx+3];
        // If it's NOT white and NOT transparent
        if (!(r > 240 && g > 240 && b > 240) && a > 50) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    console.log({ minX, maxX, minY, maxY, width: this.width, height: this.height });
  });
