class Playlist{
	constructor(title,songs){
		this.title = title,
		this.songs = [songs],
		this.favorites = 0
	}
	addSong(newSong){
		this.songs.push(newSong)
	}
}

class Album extends Playlist{
	constructor(title,songs,artist){
		super(title,songs)
		this.artist = artist
	}
}



let peopleWhoseNamesHaveTheLetterS = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(function(person){
	if (person.name.match("s")) {
	peopleWhoseNamesHaveTheLetterS.push(person)
	}
});



// people.filter(function(person) {
//   if(person.age < 35){
//     peopleYoungerThan35.push(person)
//   }
// });