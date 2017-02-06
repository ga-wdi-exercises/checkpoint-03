// Define a Playlist class. It should have...
class Playlist{
	constructor(title, songs = [], favoriteSong = 0){
		this.title = title
		this.songs = [songs]
		// this.favoriteSong = favoriteSong
	}
	addSong(songtoAdd){
		this.songs.push(songtoAdd)
	}

}
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

// Create an instance of the Playlist class.
let theBest = new Playlist("mine",'one, two, three')
console.log(theBest.songs)
theBest.addSong('hey baby')
console.log(theBest.songs)

class Album extends Playlist{
	constructor(title, songs, artist){
		super(title, songs)
		this.artist = artist

	}
}
// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.
let myalbum = new Album ('moonMan','goodbyemr','dirtyRick')
console.log(myalbum)
// Create an instance of the Album class.
