const fs = require('fs'); 

const fileName = 'example.txt';

fs.unlink(fileName, (err) => {
    if (err) {
        console.error('Error deleting the file:', err);
    } else {
        console.log(`${fileName} has been deleted successfully.`);
    }
});
