### 1

Convert the following code to use `.map`. The end result should be a `peoplesAges` array that contains each person's age.

```js
var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(function(person){
  peoplesAges.push(person.age)
});
```
```js

people.map(function(person){
  peoplesAges.push(person.age)
});
```

### 2

Convert the following code to use `.filter`. The end result should be a `peopleYoungerThan35` array that contains people (not just ages) under 35 years old.

```js
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
```
```js
people.filter(function(person) {
  if(person.age < 35){
    peopleYoungerThan35.push(person)
  }
});
```

### 3

Convert the following code to use `.forEach`. The end result should be a `peopleWhoseNamesHaveTheLetterS` that conatins people (not just names) whose names contain one or more instances of the letter "s".

```js
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});
```
```js
people.forEach(function(person){
  if (person.name.match("s")) {
  peopleWhoseNamesHaveTheLetterS.push(person)
  }
});

```
