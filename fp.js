// Convert the following code to use `.map`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.map(function(person){
  return people.age
});
// Convert the following code to use `.filter`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.filter(function(person) {
  return people.age < 35
});
// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleWithS= []
var peopleWhoseNamesHaveTheLetterS = people.forEach(function(person){
  let sNames = person.name.match("s")
  peopleWithS.push(sNames)});
