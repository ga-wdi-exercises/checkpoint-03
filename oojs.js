// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.
  class Playlist {
    constructor(title, song, favorites){
      this.title = title;
      this.song = song;
      this.favorites = 0;
    }
      addSong(song){
        this.song.push(song);
        console.log(this.song);
      }

  }

// Create an instance of the Playlist class.
let fridayPlaylist = new Playlist("Friday", "24K Magic", 1);
console.log(fridayPlaylist);

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.
