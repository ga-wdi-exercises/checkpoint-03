               // Convert the following code to use
              // `.map`
var peoplesAges = []
var people = [  //numArray= [1, 2, 3]
{name: "Jane", age: 32},
{name: "Jessica", age: 34},
{name: "Jasmine", age: 39}
]
              // people.map(function(person){
              //     let mapItToThisNewArray = person.age + 'x'
              //     return mapItToThisNewArray
              //     // peoplesAges.push(mapItToThis)
              //     console.log(peoplesAges)
              // });
let mapItToThisNewArray = people.map( function(person){
  let personAgePlusX = person.age + 'x';
    return personAgePlusX;
              // let doubledNumArray = numArray.map( function(val){
              //   let doubledVal = val * 2;
              //   return doubledVal;
} )
              // mapItToThisNewArray
              // ["32x", "34x", "39x"]



               // -----------------------------------------------
              // Convert the following code to use
             // `.filter`
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]             // HAVE TO RETURN A BOOLEAN IN THE CALLBACK TO FILTER
var peopleYoungerThan33 = people.filter(function (people) {
    console.log('people     younger than 33: ' + people)
    console.log('people.age younger than 33: ' + people.age)
    return people.age < 33
});            // => [ { name: 'Jane', age: 32 } ]



              // -----------------------------------------------
             // Convert the following to use
            //  `.forEach`
var peopleWhoseNamesHaveTheLetterS = []
var people = [
 {name: "Jane", age: 32},
 {name: "Jessica", age: 34},
 {name: "Jasmine", age: 39}
]
//grab names that contain an 's'
    // peopleWhoseNamesHaveTheLetterS =[];  // THIS WORKS N TIMES IN ATOM DEV TOOLS CONSOLE
var peopleWhoseNamesHaveTheLetterS =[];  // THIS WORKS N TIMES IN ATOM DEV TOOLS CONSOLE
// let peopleWhoseNamesHaveTheLetterS =[]; // THIS WORKS ONLY ONCE IN ATOM DEV TOOLS CONSOLE
people.forEach(function(person) {
  if ( person.name.match("s") ) {
    peopleWhoseNamesHaveTheLetterS.push(person.name);
  }
})
console.log(peopleWhoseNamesHaveTheLetterS);
// var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});
