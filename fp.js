// Convert the following code to use `.map`

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(function(person){
//   peoplesAges.push(person.age)
// });
  peoplesAges = people.map((x,i)=>people[i].age);

// Convert the following code to use `.filter`

var peopleYoungerThan35 = []
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
  peopleYoungerThan35 = people.filter((x,i)=>people[i].age<35)


// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});

// var PeopleWhoseNamesHaveTheLetterS = [];
// people.forEach((x,i)=>{if(people[i].name.match('s')){PeopleWhoseNamesHaveTheLetterS.push(people[i])}})
var PeopleWhoseNamesHaveTheLetterS = SFilter(people)
function SFilter (firstArray) {
  let returnArray = []
  firstArray.forEach((x,i)=>{if(firstArray[i].name.match('s')){returnArray.push(firstArray[i])}})
  return returnArray
}
