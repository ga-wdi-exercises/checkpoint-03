// Convert the following code to use `.map`

let people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

let peopleAge = people.map(person => person.age)
//people.forEach(function(person){
//  peoplesAges.push(person.age)
//});



// Convert the following code to use `.filter`

let people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

let peopleYoungerThan35 = people.filter(person => person.age < 35);

// people.forEach(function(person) {
//   if(person.age < 35){
//     peopleYoungerThan35.push(person)
//   }
// });

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleWhoseNamesHaveTheLetterS = [];       //people.filter(function(person){return person.name.match("s")});
people.forEach(person => person.name.match("s") ? peopleWhoseNamesHaveTheLetterS.push(person):false);


//personal note - the ? (in JS) is a ternary operator
