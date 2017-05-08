// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.map ((person) => {
  return person.age
});

// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.filter ((person) => {
  return person.age < 35;
});

// Convert the following to use `.forEach`

var sPeople = [];
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

people.forEach ((person) => {
  if (person.name.match("s")) {
    sPeople.push(person);
  }
});
