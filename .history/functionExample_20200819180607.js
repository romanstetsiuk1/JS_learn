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

