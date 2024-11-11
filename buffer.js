const fs = require('fs');

const data = 'Hello, Node.js with Buffer!';
const buffer = Buffer.from(data, 'utf-8');

fs.writeFile('example.txt', buffer, (err) => {
  if (err) {
    console.error('Error writing to file', err);
  } else {
    console.log('File written successfully!');

    fs.readFile('example.txt', (err, data) => {
      if (err) {
        console.error('Error reading the file', err);
      } else {
        console.log('File content:', data.toString('utf-8'));
      }
    });
  }
});
