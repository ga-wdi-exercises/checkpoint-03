// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(function(person){
//   peoplesAges.push(person.age)
// });

var eachAge = people.map(function(person){return person.age})
console.log(eachAge)
// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(function(person) {
//   if(person.age < 35){
//     peopleYoungerThan35.push(person)
//   }
// });
var youngerThan35 = people.filter(function(person){return person.age < 35})
console.log(youngerThan35)
// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});

var peopleWithS = []
people.forEach(function(person){
  var split = person.split("")
  for (i = 0; i < split.length; i++) {
    if (split[i].indexOf("s") != -1) {
      peopleWithS.push(person)
    }
  }
})
console.log(peopleWithS)
