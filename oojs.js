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

partyJamz = new Playlist("Party Jamz Volume 7", ["That Hit You've Been Hearing", "You Know the One", "Favorite Party Song"])  // Create an instance of the Playlist class.

class Album extends Playlist { // Create an Album class that inherits from Playlist. It should also...
  constructor(artist) {
    this.artist = artist;
  }
}


// Create an instance of the Album class.
