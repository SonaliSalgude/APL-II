const path = require('path');

const baseName = path.basename('/Users/sonali/project/index.html');
console.log('Base Name:', baseName);  

const dirName = path.dirname('/Users/sonali/project/index.html');
console.log('Directory Name:', dirName);  

const extName = path.extname('/Users/sonali/project/index.html');
console.log('File Extension:', extName);  

const joinedPath = path.join('/Users', 'sonali', 'project', 'index.html');
console.log('Joined Path:', joinedPath); 

const resolvedPath = path.resolve('project', 'index.html');
console.log('Resolved Path:', resolvedPath);  

const parsedPath = path.parse('/Users/sonali/project/index.html');
console.log('Parsed Path:', parsedPath);

const formattedPath = path.format({
    root: '/',
    dir: '/Users/sonali/project',
    base: 'index.html'
});
console.log('Formatted Path:', formattedPath);