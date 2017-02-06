// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(function(person){
  peoplesAges.push(person.age)
});

//solution
var peoplesAges = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
];

funtion getAges(item, index){
  var peoplesAges = [item.peoplesAges].join("");
}
function myFunction() {
    document.getElementById("demo").innerHTML = peoplesAges.map(getAges);
}
});


// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(function(person) {
  if(person.age < 35){
    peopleYoungerThan35.push(person)
  }
});
// Solution for how to use filter

var peopleAges = [""]

 function checkYoungerThan35(age){
   return age <= 35;
   function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkYoungerThan35);
}

 }



// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});

//Sloution to get average age
var average = 0;
var numbers = [32, 34, 39];

function myFunction(item){
  average += item;
  demo.innnerHtml = average;

}
