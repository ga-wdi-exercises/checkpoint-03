class Playlist {
  constructor(title, songs){
    this.title = title,
    this.songs = songs,
    this.favorites = 0
  }
  addSong(song){
    this.songs.push(song)
  }
}

class Album extends Playlist{
  constructor(title, songs, artist){
    super(title,songs)
    this.artist = artist
  }

}

myPlaylist = new Playlist("My cool playlist", ["Song1", "Song2", "Song3"])
myAlbum = new Album("My Album Title", ["Song1a", "Song2a", "Song3a"], "artist1")

console.log(myPlaylist.title)
console.log(myAlbum.artist)

myPlaylist.addSong("addedSong")

console.log("myPlaylist Songs length: " + myPlaylist.songs.length)

// ---------------------------------------------------------------------------------

var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.map(function(person){
  peoplesAges.push(person.age)
});

console.log(peoplesAges)


var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.filter(function(person) {
  if(person.age < 35){
    peopleYoungerThan35.push(person)
  }
});

console.log(peopleYoungerThan35)



var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleWhoseNamesHaveTheLetterS = []

people.forEach(function(person){
  if (person.name.match("s")){

    peopleWhoseNamesHaveTheLetterS.push(person)
  }else {

  }
});

console.log(peopleWhoseNamesHaveTheLetterS)
