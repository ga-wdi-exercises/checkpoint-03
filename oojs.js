// Define a Playlist class. It should have...
class Playlist {
	constructor(title, song) {
  // A title property that is determined by some input.
	this.title = title
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
	let songArray = []
	songArray.push(song)
	this.songs = songArray
  // A favorites property that is initialized at 0. This cannot be set by user input.
	this.favorites = 0
	}
  // An addSong method that adds a song to the songs property.
	addSong(song) {
		this.songs.push(song)
	}
}

// Create an instance of the Playlist class.

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.
