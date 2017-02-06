// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

class Playlist {
  constructor(title, songs) {
    this.title = title
    this.songs = songs
    this.favorites = 0
  }
  addSong(song) {
    this.songs.push(song)
  }
}


// Create an instance of the Playlist class.
var jams = new Playlist("road trip jams", ["water", "believe", "shine"]);
// Create an Album class that inherits from Playlist. It should also...

  // Have an artist property that is determined by some input.

  class Album extends Playlist {
    constructor(title, songs, artist) {
      super(title,songs);
      this.artist = artist
    }
  }

// Create an instance of the Album class.

var stringCheese = new Album("untying the knot", ["water", "believe", "born on the wrong planet"], "String Cheese Incident")
