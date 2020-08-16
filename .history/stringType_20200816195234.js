const name = 'Roman';

console.log(name.length);     // 5
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2));      // m
console.log(name.indexOf('n'));   // 4
console.log(name.indexOf('T'));   // -1
console.log(name.startsWith('rom'));   // false
console.log(name.startsWith('Rom'));   // true
console.log(name.toLowerCase().startsWith('rom'));  // true
console.log(name.endsWith('an'));                   // true
console.log(name.repeat(2));

const string = '       some text      ';
console.log(string);              //       some text      
console.log(string.trim());       //some text
console.log(string.trimLeft());   //some text      
console.log(string.trimRight());  //       some text

// Example
const person1 = 'Mark';
const person2 = "Michal";
const person1Age = 29;
const person2Age = -3;

function logPerson(somethink, name, age) {
    if (age < 0){
      age = 'not born yet'
    }
  return `${somethink[0]}${name}${somethink[1]}${age}${somethink[2]}`
}

const output1 = logPerson`Name: ${person1}, Age: ${person1Age}!`;
const output2 = logPerson`Name: ${person2}, Age: ${person2Age}!`;

console.log(output1);
console.log(output2);

