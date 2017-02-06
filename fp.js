// Convert the following code to use `.map`

var peoplesAges = []
peopleAges = people.map(person => person.age)
// var people = [
//   {name: "Jane", age: 32},
//   {name: "Jessica", age: 34},
//   {name: "Jasmine", age: 39}
// ]
// people.forEach(function(person){
//   peoplesAges.push(person.age)
// });



// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
peopleYoungerThan35 = people.filter(person => person.age < 35);
// var people = [
//   {name: "Jane", age: 32},
//   {name: "Jessica", age: 34},
//   {name: "Jasmine", age: 39}
// ]
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
var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});
