// Define a Playlist class. It should have...
class Playlist {
  constructor(title, songs) {
    this.title = title; // A title property that is determined by some input.
    this.songs = songs; // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
    this.favorites = 0 // A favorites property that is initialized at 0. This cannot be set by user input.
  }
  addSong(song) { // An addSong method that adds a song to the songs property.
    this.songs.push(song);
  }
}



// Create an instance of the Playlist class.

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.
