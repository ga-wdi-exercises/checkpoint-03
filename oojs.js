// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

  class Playlist{
  	constructor(title){
  		this.title = title
  		this.songs = []
  	}
  	var favorites = 0
  	addSong(song){
  		this.songs.push(song)
  	}
  }

// Create an instance of the Playlist class.
var adamsPlaylist = new Playlist("Jazz")

// Create an Album class that inherits from Playlist. It should also...
class Album extends Playlist{
	constructor(title, artist){
		this.artist = artist
	}
}
var newAlbum = new Album ("John Coltrane")
// Have an artist property that is determined by some input.

// Create an instance of the Album class.
