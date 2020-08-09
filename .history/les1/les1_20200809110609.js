const userNickName = prompt('What is your nickname?');
alert(`${userNickName} welcome to my world`);

/* documentation from MDN
 https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Pierwsze%C5%84stwo_operator%C3%B3w?
*/

function calculateAge (bornAge){
  return 2020-bornAge;
}

const myAge = calculateAge(1989);
console.log(myAge);

console.log(calculateAge(1991));
console.log(calculateAge());
console.log(calculateAge(1984));


