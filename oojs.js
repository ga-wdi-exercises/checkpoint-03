// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

  class Playlist {
    constructor(title, song) {
      this.title = title;
      this.songs = [song];
      this.favorite = 0;
    }
    addSong(song) {
      this.songs.push(song)
    }
  }

// Create an instance of the Playlist class.

const jams = new Playlist("My Jams", "Total Eclipse of the Heart")

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

  class Album extends Playlist {
    constructor(title, song, artist) {
      super(title, song);
      this.artist = artist;
    }
  }

  const michaelJackson = new Album("MJ's 80s hits", "Man in the Mirror", "Michael Jackson")

// Create an instance of the Album class.
