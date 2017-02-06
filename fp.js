// Convert the following code to use `.map`


var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(function(person){
//   peoplesAges.push(person.age)
// });

var peoplesAges = people.map(function(x) {
  return x.age
})


// Convert the following code to use `.filter`


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

var peopleYoungerThan35 = people.filter(function(x) {
  return x.age < 35
})

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});

var peopleWhoseNamesHaveTheLetterS = []
people.forEach(function(x) {
  // if (x.name.indexOf("s" !=) {
  //   return
  // }
peopleWhoseNamesHaveTheLetterS.push(x.name.match("s"))

})
