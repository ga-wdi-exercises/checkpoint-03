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

partyJamz = new Playlist("Party Jamz Volume 7", ["That Hit You've Been Hearing", "Another One", "Favorite Party Song"])  // Create an instance of the Playlist class.

class Album extends Playlist { // Create an Album class that inherits from Playlist. It should also...
  constructor(title, songs, artist) {
    super(title, songs);
    this.artist = artist; //
  }
}

eno = new Album("Ambient 1: Music for Airports", ["1/1", "2/1", "1/2", "2/2"], "Brian Eno"); // Create an instance of the Album class.
eno.favorites = 257;
