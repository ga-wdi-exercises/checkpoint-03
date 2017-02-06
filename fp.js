// Convert the following code to use `.map`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peoplesAges = people.map(function(person){
  person.age
});

// Convert the following code to use `.filter`

function youngerThan35(value) {
  return value >= 35
}
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleYoungerThan35 = people.filter(youngerThan35)

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

var peopleWhoseNamesHaveTheLetterS = []

people.forEach(function() {
peopleWHoseNamesHaveTheLetterS.push(function(person){
  return person.name.match("s")
})
})

//people.filter(function(person){return person.name.match("s")});
