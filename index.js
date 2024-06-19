const QRCode = require('qrcode');

const generateQRCode = async (text) => {
  try {
    console.log(await QRCode.toString(text, { type: 'terminal' }));
    await QRCode.toFile('qrcode.png', text);
    console.log('QR Code generated and saved as qrcode.png');
  } catch (err) {
    console.error(err);
  }
};


// Example text for QR code
const text = 'https://nocturnallabel.com/';
generateQRCode(text);
