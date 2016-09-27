// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

//This is my answer to #1//
var newPeople = people.map(person => {
  return person.age;
})

//people.forEach(person => {
//  peoplesAges.push(person.age)
//
//})
//var newPeople = peoplesAges.map(person);

// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
//people.forEach(person => {
//  if(person.age < 35){
//    peopleYoungerThan35.push(person)
//  }
//})

//This is my answer to question #2
var newFilter35 = people.filter(person => {
  if(person.age < 35){
    return person.age;
  }
})

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
//var peopleWhoseNamesHaveTheLetterS = people.filter(person => person.name.match("s"))
 //This is my answer to #3//
var s_people = people.forEach(person =>person.name.match("s"))
