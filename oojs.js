// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

class Playlist {
  constructor(title) {
    this.title = title
    this.songs = []
    this.favorites = 0
  }
  addSong(song) {
    this.songs.push(song)
  }
}

// Create an instance of the Playlist class.

let popCrush = new Playlist('Pop Crush')

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

class Album extends Playlist {
  constructor(artist, title) {
    super(title)
    this.artist = artist
  }
}

// Create an instance of the Album class.

let anti = new Album('Rihanna', 'Anti')
