// Dependencies:
var aRel = require('./index.js');

// Slicing the first few items:
var head = aRel.slice(0, 10);

// Yields:
console.log('js', require('util').inspect(head));

// And, computing `length`:
var length = aRel.length;

// Yields:
console.log('js', String(length));
