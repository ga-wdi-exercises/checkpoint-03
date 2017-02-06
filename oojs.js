// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

// Create an instance of the Playlist class.

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.
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
   constructor(title,favorites) {
       this.title = title
       this.songs = []
       this.favorites = 0
   }
      addSong(newSong) {
        this.songs.push(newSong);
      }
  }

const bossanova = new Playlist ("Bossa Nova", 0);
bossanova.addSong("Tanto Tempo");

class Album extends Playlist {
    constructor(title,favorites,artist) {
      super(title,favorites)
      this.artist = artist
    }
  }

  const sings = new Album ("Sings", 0 , "Billie Holiday");
  sings.addSong("Blue Moon");
