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
console.log(people[indexPeople]);

const indexPeople2 = people.find(function(person){
  return person.age === 31;
})
console.log(indexPeople2);
console.log(people[indexPeople2]);

let findedPerson;
for(const person of people){
  console.log(person);
  if(person.age === 21){
    findedPerson = person
  }
}
console.log(findedPerson);

// using arrowFunction
const indexPeople3 = people.find((person) => {
  return person.age === 31;
})
console.log(indexPeople3);
console.log(people[indexPeople3]);




















