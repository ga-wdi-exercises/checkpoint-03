// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.map(person => {
  peoplesAges.push(person.age)
})

console.log(peoplesAges);

// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.filter(person => {
  if(person.age < 35){
    peopleYoungerThan35.push(person.name, person.age)
  }
})

console.log(peopleYoungerThan35);

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var letterS = []
var peopleWhoseNamesHaveTheLetterS = []

people.forEach(person => {
  if (person.name.match("s")){
    peopleWhoseNamesHaveTheLetterS.push(person.name)
  }
})

console.log(peopleWhoseNamesHaveTheLetterS);
