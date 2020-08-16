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






