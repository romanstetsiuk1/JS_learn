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

