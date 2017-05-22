// Convert the following code to use `.map`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

var peoplesAges = people.map(function (person) {
  return person.age
})

// Convert the following code to use `.filter`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

var peopleYoungerThan35 = people.filter(function (person) {
  return person.age < 35;
})

// // Convert the following to use `.forEach`
//
// var people = [
//   {name: "Jane", age: 32},
//   {name: "Jessica", age: 34},
//   {name: "Jasmine", age: 39}
// ]
// // var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});
//
//
// var letterS = people.forEach(function (person, index) {
//   // return person.name.match("s")
//   if (people.index[index].indexOf('s') != -1)) {
//     alert("test")
//   }
//
// })
