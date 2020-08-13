console.log('Welcome to lesson nr 2');

// Number
const numberInt = 21;       // integer
const numberFloat = 47.3;   // float
const numberPow = 10e3;     // 10e3 = 10000

console.log(`Type Integer: ${numberInt}`);
console.log(`Type Float: ${numberFloat}`);
console.log(`Pow (10e3): ${numberPow}`);

console.log(`Exist max value of Integer number. It is ${Number.MAX_SAFE_INTEGER}`);
console.log(`Exist min value of Integer number. It is ${Number.MIN_SAFE_INTEGER}`);

console.log(`Max integer value in Math is: Math.pow(2,53) - 1 = ${Math.pow(2,53) - 1}`)

console.log(`Max posible value in JS = ${Number.MAX_VALUE}`);
console.log(`Min posible value in JS = ${Number.MIN_VALUE}`);

console.log(`In JS exist positive infinity(Number.POSITIVE_INFINITY): ${Number.POSITIVE_INFINITY}\n
exemple infinity is number/0, like 2/0 = ${2/0}`);
console.log(`In JS exist negative infinity(Number.NEGATIVE_INFINITY): ${Number.NEGATIVE_INFINITY}`);

// Nan
console.log(`NAN value (Not A Number). Number.NaN = ${Number.NaN}`);
console.log(typeof NaN);
const createNanValue = 2 / undefined;
console.log(Number.isNaN(createNanValue));
console.log(Number.isNaN(43));

console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(78));





