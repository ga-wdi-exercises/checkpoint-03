// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

  class Playlist {
    constructor(title, songs) {
      this.title = title;
      this.songs = {};
    }
    addSong(name){
      this.songs.push ({"name":name,"favorites":0});
      return;
    }/* addSong Method */
  } /* class */


// Create an instance of the Playlist class.
const pl= new Playlist("mikes" );
// Create an Album class that inherits from Playlist. It should also...
class Album extends Playlist {
  constructor(artist){
    super();
    this.artist =artist;
  }

}

  // Have an artist property that is determined by some input.

// Create an instance of the Album class.
const artist= new Album("Doobie Brothers" );
