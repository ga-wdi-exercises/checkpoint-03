// Convert the following code to use `.map`

var peoplesAges = [];
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(function(person){
//   peoplesAges.map(person.age)
// });

// var peoplesAges = [1, 5, 10, 15];
var peoplesAges = people.map(function(x) {
   return x * 2;
});
console.log(people)
// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.filter(function(person) {
  if(people.age < 35){
    peopleYoungerThan35.push(person)
  }
  console.log(peopleYoungerThan35)
});
// naysayers.filter(function(naysayer){
//   return naysayer.age > 300;
// })
// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleWhoseNamesHaveTheLetterS = people.forEach(function(person){return person.name.match("s")});
