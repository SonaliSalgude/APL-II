const util = require('util');

const formattedString = util.format('Hello %s!', 'world');
console.log(formattedString); 

const obj = { name: 'Sonali', age: 21 };
console.log(util.inspect(obj, { showHidden: false, depth: null }));