// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

peoplesAges = people.map(function(inp){
  return inp.age
})

// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
peopleYoungerThan35 = people.filter(function(inp){
  return inp.age < 35
})

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
var peopleWhoseNamesHaveTheLetterS = []
people.forEach(function(inp){
  if (inp.name.match('s')==null) {

  } else {
    peopleWhoseNamesHaveTheLetterS.push(inp)
  }
})

// var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});
