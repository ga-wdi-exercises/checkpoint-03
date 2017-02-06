// Convert the following code to use `.map`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peoplesAges = people.map(function(person) {
  return person.age;
});

// Convert the following code to use `.filter`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleYoungerThan35 = people.filter(function(person) {
  if (person.age < 35) {
    return true;
  }
  return false;
});

// Convert the following to use `.forEach`

var peopleWhoseNamesHaveTheLetterS = [];
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(function(person) {
  if (person.name.match("s")) {
    peopleWhoseNamesHaveTheLetterS.push(person);
  }
});
