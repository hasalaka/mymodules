const hasmath = require('hasmath');


const calcsqre = (number) => {return hasmath.square(number)};
const sqr = calcsqre(3);
console.log(`Squareee of 3 is ${sqr}`);

exports.calcsqre = calcsqre;