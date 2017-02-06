// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

// Create an instance of the Playlist class.

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.

class Playlist {
  constructor(title, songs, favorites){
    this.title = title;
    this.songs = [];
    this.favorites = 0;
  }
  addSong(newSong){
    this.songs.push(newSong)
  }
}
const closingTime = new Playlist("Closing Time", ["bye bye bye"], 0);


class Album extends Playlist{
  constructor(title, songs, favorites, artist){
    super(title, songs, favorites)
    this.artist = artist
  }

}
const FeelingStrangelyFine = new Album ("Feeling Strangely Fine", ["this", "that"], 0, "Semisonic");
