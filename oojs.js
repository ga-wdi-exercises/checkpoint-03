// Define a Playlist class. It should have...
class Playlist{
	constructor(title, songs = [], favoriteProp = 0){
		this.title = title
		this.songs = songs
		this.favoriteProp = favoriteProp
	}
	addSong(songtoAdd){
		this.property.push(songtoAdd)
	}

}
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

// Create an instance of the Playlist class.
let theBest = new Playlist("mine",'one, two, three')
console.log(theBest.songs)
// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.
