// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

peoplesAges = people.map((person) => person.age)


// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

peopleYoungerThan35 = people.filter((person) => person.age < 35)


// Convert the following to use `.forEach`
// 
// var people = [
//   {name: "Jane", age: 32},
//   {name: "Jessica", age: 34},
//   {name: "Jasmine", age: 39}
// ]
// var peopleWhoseNamesHaveTheLetterS = []
//
// people.forEach((person) => {
//   if (person.name.includes('s')) {
//     peopleWhoseNamesHaveTheLetterS.push(person);
//   }
// })
