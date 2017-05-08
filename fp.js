// Convert the following code to use `.map`

// var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.map(function(people){
  return people.age;
});

// Convert the following code to use `.filter`

// var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
];
people.filter(function(people){
  return people.age < 35;
});

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(function(s){
 if(people.match("s")){
    return people.name;
  }
});
// var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});
