// function Declaration
function sayHello(name) {
  console.log('Hello, ', name);
}

// function Expression
const sayHi = function sayHello2(name) {
  console.log(`Hi ${name}, how are You?`);
}

sayHello('Mark');
sayHi('Michal');

console.log(typeof sayHello);

// No name function
let counter = 0;
const interval = setInterval(function(){
  if (counter === 5) {
    clearInterval(interval)
  } else {
    console.log(++counter);
  }
}, 1000)

// Arrow functions. since ES6
const arrow = (name) => {
  console.log('Hello, ', name);
}

const arrow2 = name => console.log(`Hi ${name}, how are You?`);

arrow('Monika');
arrow2('Ira');

const pow2 = num => num ** 2;
const powNum = (num1, num2) => {
  return num1 ** num2;
}
console.log(pow2(5))
console.log(powNum(5, 3));

// default paramets in functions
const sum = (a, b) => a + b;
const sum1 = (a, b = 1) => a + b;
const sum2 = (a = 2, b = a + 1) => a + b;

console.log(sum(2));
console.log(sum1(2));
console.log(sum2());



