// Convert the following code to use `.map`

var peoplesAges = []
var people = [{
    name: "Jane",
    age: 32
  },
  {
    name: "Jessica",
    age: 34
  },
  {
    name: "Jasmine",
    age: 39
  }
]

var map = people.map(function(item) {
  return item.age
});
// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [{
    name: "Jane",
    age: 32
  },
  {
    name: "Jessica",
    age: 34
  },
  {
    name: "Jasmine",
    age: 39
  }
]
var old = people.filter(function(person) {
  return person.age < 35;
});
// Convert the following to use `.forEach`

var people = [{
    name: "Jane",
    age: 32
  },
  {
    name: "Jessica",
    age: 34
  },
  {
    name: "Jasmine",
    age: 39
  }
]
var nameS = people.forEach(function(person) {
  return person.name.match("s");
});
