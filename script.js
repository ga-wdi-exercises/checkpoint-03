var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleWhoseNamesHaveTheLetterS = [];

function nameContainsLetterS(group, nameHasLetterS){
    group.forEach(function(person) {
        nameHasLetterS.push(person.name.match("s"));
    });
}