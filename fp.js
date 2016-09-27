// Convert the following code to use `.map`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
peoplesAges = people.map(person => person.name.age)

// people.forEach(person => {
//   peoplesAges.push(person.age)
// })

// Convert the following code to use `.filter`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
peopleYoungerThan35 = people.filter((person) => person.age < 35)
// people.forEach(person => {
//   if(person.age < 35){
//     peopleYoungerThan35.push(person)
//   }
// })

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
peopleWhoseNamesHaveTheLetterS = []
people.forEach(person => {
  peopleWhoseNamesHaveTheLetterS.push(person.name.match("s"))
})
// var peopleWhoseNamesHaveTheLetterS = people.filter(person => person.name.match("s"))
