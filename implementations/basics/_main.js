const arithmetic = require('./arithmetic');
const array = require('./array');
const display = require('./affichageNombres');
const divers = require('./divers');
const maths = require('./maths');
const strings = require('./strings');

// @example add
// add(2, 3) // c
// add(-2, -3) // -5
// add(2, -3) // -1

// @example sub
// sub(2, 3) // -1
// sub(-2, -3) // 1
// sub(2, -3) // 5

// @example mul
// mul(2, 3) // 6
// mul(-2, -3) // 6
// mul(2, -3) // -6
// mul(2, 0) // 0

// @example div
// div(6, 3) // 2
//div(-6, -3) // 2
// div(6, -3) // -2
// div(6, 0) // Error

let a = -2;
let b = 3;

console.log(`a=${a}, b=${b} : a+b=${arithmetic.add(a, b)}`);
console.log(`a=${a}, b=${b} : a-b=${arithmetic.sub(a, b)}`);
console.log(`a=${a}, b=${b} : a*b=${arithmetic.mul(a, b)}`);
console.log(`a=${a}, b=${b} : a/b=${arithmetic.div(a, b)}`);

console.log(array.triDecroissant([1, 3, 2, 5, 4]));