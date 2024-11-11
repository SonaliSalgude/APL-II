const fs = require('fs'); 

const content = 'Hello, this is a sample text written to a file!';

const fileName = 'example.txt';

fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(`Successfully wrote to ${fileName}`);
    }
});
