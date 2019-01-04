let users =  [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 2, name: "Second Peter"},
    {id: 3, name: "Mary"}
  ];

//Find gives first occurance of the arry
let second = users.find(user => user.id === 2);
console.log(second)
//Filter gives all occurances of the arry

let allSeconds = users.filter(user => user.id === 2);
console.log(allSeconds);

console.log(` ------------- Splice example ----------------`);
//Splice can be used to insert and/or remove

users.splice(2,0, {id: 11, name: "Johnii"},{id: 12, name: "Peteer"});
console.log('Added Users '+JSON.stringify(users));

//Now get rid of what we have entered
users.splice(2,2);
console.log(users);

//Transformations

console.log(` ------------- map (transform) example ----------------`);
//map calls an arry and return with transformed results
let userNames = users.map(e => e.name);
console.log(userNames);

let myUserNames = users.map(e => e.name).map(e => 'My '+ e);
console.log(myUserNames);

userNames1 = users.map(e => e.id > 1 ? e.name : null);
console.log(userNames1)

//reduce - reduces to arry to a single value
let usersStr = users.map(e => e.name).reduce((res, ele) => res = res + ', ' + ele, 'Here are my names');
console.log(usersStr);

usersStr = users.map(e => e.name).reduce((res, ele, idx) => idx === 0 ? res = res  + ' ' + ele : res = res + ', ' + ele, 'Here are my names');
console.log(usersStr);