// Convert the following code to use `.map`

// var peoplesAges = people.map(function(p){
//     var age = [];
//     age = p.age;
//     return age;
//   })
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(person => {
//   peoplesAges.push(person.age)
// })


// Convert the following code to use `.filter`


var peopleYoungerThan35 = people.filter(youngerThan35)
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

function youngerThan35(person){
  return person.age <35;
}


// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// var peopleWhoseNamesHaveTheLetterS = people.filter(person => person.name.match("s"))

var peopleWhoseNamesHaveTheLetterS = people.forEach(function (person){
  person.name.match("s");
});
