// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.
class Playlist {
  constructor(title, songs) {
    this.title = title;
    this.songs = [];
    this.favorites = [];
  }
  addSong(song) {
    this.songs.push(song);
  }
}
// Create an instance of the Playlist class.
const metallica = new Playlist("Garage Days", ["One", "And Justice for All", "Seek and Destroy"]);
// Create an Album class that inherits from Playlist. It should also...
class Album extends Playlist {
  constructor(artist, title, songs) {
    this.artist = artist;
  }
}
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.
