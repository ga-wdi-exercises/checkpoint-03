// Convert the following code to use `.map`

// var peoplesAges = [];
// var people = [
//   {name: "Jane", age: 32},
//   {name: "Jessica", age: 34},
//   {name: "Jasmine", age: 39}
// ];
// people.forEach(function(person){
//   peoplesAges.push(person.age)
// });

// peoplesAges = people.map(function(people){
//   var newArray = {};
//   newArray[people.name] = people.age;
//   return newArray;
// });

// Convert the following code to use `.filter`

var peopleYoungerThan35 = [];
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
];
// people.forEach(function(person) {
//   if(person.age < 35){
//     peopleYoungerThan35.push(person);
//   }
// });
people.filter = function isOldEnough(people){
  for(name in people){
    if(age < 35){
      peopleYoungerThan35[name] = people[name];
    }
  }
  return peopleYoungerThan35;
};

// Convert the following to use `.forEach`

// var people = [
//   {name: "Jane", age: 32},
//   {name: "Jessica", age: 34},
//   {name: "Jasmine", age: 39}
// ];
// var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s");});
