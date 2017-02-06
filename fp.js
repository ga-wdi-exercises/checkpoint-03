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

peoplesAges = people.map(person => {
  return person.age;
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

peopleYoungerThan35 = people.filter(person => {
  return person.age < 35;
})

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// var peopleWhoseNamesHaveTheLetterS = people.filter(person => person.name.match("s"))

// I'm really struggling with doing this one without using .push and without mutating the original and with using .forEach.
// This answer seems wrong but I couldn't think of a better solutions with the given constraints.
var peopleWhoseNamesHaveTheLetterS = [];
var index = 0;
people.forEach(person => {
  if (person.name.indexOf('s') >= 0) {
    let newObject = {};
    for (let key in person) {
      newObject[key] = person[key];
    }
    peopleWhoseNamesHaveTheLetterS[index] = newObject;
    index += 1;
  }
})
