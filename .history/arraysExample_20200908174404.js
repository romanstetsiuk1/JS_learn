const names = ['Leo', 'Nina', 'Mark', 'Dominika'];

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



