const names = ['Leo', 'Nina', 'Mark', 'Dominika'];
const people = [
  {name:'user1', age:26},
  {name:'user2', age:31},
  {name:'user3', age:29},
  {name:'user4', age:21},
]

// Method
names.push('Jack');
console.log(names);
names.unshift('Marta');
console.log(names);

const firstItem = names.shift();
console.log(firstItem);
console.log(names);

const lastItem = names.pop();
console.log(lastItem);
console.log(names);

console.log(names.reverse());

console.log(names.indexOf('Mark'));
const indexNr = names.indexOf('Mark');
names[indexNr] = 'John';
console.log(names);

const indexPeople = people.findIndex(function(person){
  return person.age === 29;
})
console.log(indexPeople);




