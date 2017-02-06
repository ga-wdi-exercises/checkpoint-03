// Convert the following code to use `.map`

// var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(function(person){
//   peoplesAges.push(person.age)
// });
//THis is the template from my notes on the subject.
// var numbers = [1, 4, 9, 3, 27, 7];
// var roots = numbers.map(Math.sqrt);
//this is what I found on w3schools for an almost identical example, except they do not use the .map:
// var persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
// ];
//
//
// function getFullName(item, index) {
//     var fullname = [item.firstname,item.lastname].join(" ");
//     return fullname;
// }
//
// function myFunction() {
//     document.getElementById("demo").innerHTML = persons.map(getFullName);
// }
var peoplesAges = people.map(people.age);
//So I don't know why my array isn't populated.



// Convert the following code to use `.filter`

// var peopleYoungerThan35 = []
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
// Here is the documentation from MDN:
// function isBigEnough(value) {
//   return value >= 10;
// }
//
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // filtered is [12, 130, 44]
// I modelled the function on that:
function youngerThan35(age){
  return age < 35
}
var peopleYoungerThan35 = people.filter(youngerThan35)
//When that produced an empty array, I checked stack overflow, and found this:
// You can use the Array.prototype.filter method:
//
// homes.filter(function (el) {
//   return el.price <= 1000 &&
//          el.sqft >= 500 &&
//          el.num_of_beds >=2 &&
//          el.num_of_baths >= 2.5;
// });
//Which seems a more layered version of what I have. I'm not sure what I'm doing wrong.


// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});

var peopleWhoseNamesHaveTheLetterS = people.forEach(function(person) {
  if(person.name.match("s")){
    peopleWhoseNamesHaveTheLetterS.push(person)
  }
});
