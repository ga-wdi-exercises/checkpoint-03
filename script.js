//Beginning of OOJS.MD segment.
class playList {
		constructor(title, song){
		this.title = title;
		this.song = [];
		this.favorites = prompt("Add rating of favorites from 0-5 here.");
	}
	addSong(){
		this.song = prompt("Add song of choice to current play list you are creating.")
	}
}

const list1 = new playList("Burning Bridges", "American Love");
	console.log(list1.title)
	console.log(list1.song)
	list1.addSong();

class Album extends playList {
	constructor(title, song, artist){
		super(title, song);
		this.artist = artist;
	}
}

const album1 = new Album("Burning Bridges", "Pressure Of The Hinges", "Haste The Day");
	console.log(album1.artist)
	console.log(album1.title)
	console.log(album1.song)

// End of OOJS.MD segment of the checkpoint.


// Beginning of FP.MD segment.

// var peoplesAges = [] // for ref and not to consistently look at .md
// var people = [
//   {name: "Jane", age: 32},
//   {name: "Jessica", age: 34},
//   {name: "Jasmine", age: 39}
// ]
// people.forEach(function(person){
//   peoplesAges.push(person.age)
// });
var peopleWithAge = ["Jane, age 32", "Jessica, age 34", "Jasmine, age 39"]
var peopleArray = peopel.map()
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(function(person){
  peoplesAges.push(person.age)
});