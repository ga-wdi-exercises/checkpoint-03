// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.
  class Playlist {
  	constructor(title, songs_array ) {
  		this.title: title,
  		this.songs = songs_array,
  		this.favorites = 0
  	}
  	addSong(song) {
  		this.songs.push(song)
  	}
  }

// Create an instance of the Playlist class.
let sadSongs = new Playlist('Sad Songs', ['Cry Baby', 'Tear in my Beer'])

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.
class Album extends Playlist {
	constructor(title, songs_array, artist) {
		this.artist = artist
		super(title, songs_array)
	}
}
// Create an instance of the Album class.

let owen = new Album("At home with Owen", ["Bird in hand", "Use your words"], "Owen")
