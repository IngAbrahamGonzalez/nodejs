const sharp = require('sharp');

sharp('./kratos.jpg')
    .resize(80)
    .toFile('resized.jpg');