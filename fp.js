// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(person => {
//   peoplesAges.push(person.age)
// })

people.map (person => {
	peoplesAges.push(person.age)
})

// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(person => {
//   if(person.age < 35){
//     peopleYoungerThan35.push(person)
//   }
// })

people.filter(person => {
  if (person.age < 35){
    peopleYoungerThan35.push(person)
  }
})

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// var peopleWhoseNamesHaveTheLetterS = people.filter(person => person.name.match("s"))

var peopleWhoseNamesHaveTheLetterS = []
people.forEach(person => {
	if (person.name.match("s")) {
		peopleWhoseNamesHaveTheLetterS.push(person)
	}
})
