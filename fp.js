// Convert the following code to use `.map`

var peoplesAges = [32, 34, 39]
var people = ["Jane", "Jessica", "Jasmine"]
people.map(people[, peoplesAges])

// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleYoungerThan35 = people.filter(function(person){return person.age > 35});

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(function(person) {
  if(person.startsWith("s"){
    peopleWhoseNamesHaveTheLetterS.push(person)
  }
});
