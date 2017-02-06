// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

peoplesAges = people.map(function(person) {
  return person.age
});
// people.forEach(function(person){
//   peoplesAges.push(person.age)
// });

// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

peopleYoungerThan35 = people.filter(function(person) {
  return person.age < 35
});

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

peopleWhoseNamesHaveTheLetterS = []
people.forEach(function(person) {
  if (person.name.match("s")) {
    peopleWhoseNamesHaveTheLetterS.push(person.name)
  }
});
