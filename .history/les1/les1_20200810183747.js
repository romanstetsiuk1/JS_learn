const userNickName = prompt('What is your nickname?');
alert(`${userNickName} welcome to my world`);

/* documentation from MDN
 https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Pierwsze%C5%84stwo_operator%C3%B3w?
*/


// basic functions
function calculateAge (bornAge){
  return 2020-bornAge;
}

const myAge = calculateAge(1989);
console.log(myAge);

console.log(calculateAge(1991));
console.log(calculateAge());
console.log(calculateAge(1984));

function logInfoAboutUser (name,bornAge){
  console.log(`User ${name} have ${calculateAge(bornAge)} years.\n
  ${name} was born in ${bornAge}`);
}

logInfoAboutUser('Roman',1989);
logInfoAboutUser('Miśia', 1991);


// basic Arrays
// methods of declarate arrays:

const cars = ['BMW', 'Honda', 'Toyota'];
console.log(cars);

const cars2 = new Array ('Mazda', 'Ford', 'Opel');
console.log(cars2);

cars[cars.length] = 'Porsche';
console.log(cars);


// basic Loops
for (let i=0; i<=cars.length; i++){
  const car = cars[i];
  console.log(`Element number ${i} is ${car}`);
}

// enother way
for (let car of cars){
  console.log(`${car} it is good car.`)
}


// Objects
const person = {
  firstName: 'Roman',
  lastName: 'Stetsiuk',
  year: 1989,
  languages: ['Ua', 'Ru', 'En', 'PL'],
  hasWife: true,
  sayHello: function() {
    console.log('Hello')
  }
}

console.log(person);
console.log(person.firstName);
person.sayHello();
console.log(person['year']);
const key = 'languages';
console.log(person[key]);








