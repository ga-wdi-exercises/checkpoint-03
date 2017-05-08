// Convert the following code to use `.map`


var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
];
var peoplesAges = people.map(people);


// Convert the following code to use `.filter`


var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
];
let peopleYoungerThan35 = people.filter((people) => {
  return people.age < 35;
});


// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach((s) => {
  console.log("These people have an 's' in their names:" + s)
};
