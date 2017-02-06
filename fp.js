// // Convert the following code to use `.map`

// var peoplesAges = []
// var people = [
//   {name: "Jane", age: 32},
//   {name: "Jessica", age: 34},
//   {name: "Jasmine", age: 39}
// ]
// people.map(function(person){
//   peoplesAges.push(person.age)
// });
// console.log(peoplesAges)

// Convert the following code to use `.filter`

// function peopleYoungerThan35(person) {
//   return people.age < 35
// }
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

let filtered = people.filter(function(el){
  return el.age > 35})
console.log(filtered)


// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});
