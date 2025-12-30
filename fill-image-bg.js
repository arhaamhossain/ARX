const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagePath = path.join(__dirname, 'public', 'MROV_CAD_RENDER_1.png');
const tempPath = path.join(__dirname, 'public', 'MROV_CAD_RENDER_1_temp.png');

// Gray-blue color
const grayBlue = { r: 75, g: 85, b: 99 };
const white = { r: 255, g: 255, b: 255 };

sharp(imagePath)
  .raw()
  .toBuffer()
  .then(data => {
    // Process pixel data to replace white with gray-blue
    const channels = 3; // RGB
    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Check if pixel is white or very close to white
      if (r > 240 && g > 240 && b > 240) {
        data[i] = grayBlue.r;
        data[i + 1] = grayBlue.g;
        data[i + 2] = grayBlue.b;
      }
    }
    
    // Get image dimensions
    return sharp(imagePath).metadata().then(metadata => ({
      data,
      width: metadata.width,
      height: metadata.height
    }));
  })
  .then(({ data, width, height }) => {
    // Create new image from processed data
    return sharp(data, {
      raw: {
        width: width,
        height: height,
        channels: 3
      }
    })
    .png()
    .toFile(tempPath);
  })
  .then(info => {
    fs.renameSync(tempPath, imagePath);
    console.log('Successfully replaced white space with gray-blue!');
    console.log('Output info:', info);
  })
  .catch(err => {
    console.error('Error processing image:', err);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    process.exit(1);
  });
