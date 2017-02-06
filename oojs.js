// Define a Playlist class. It should have...
// A title property that is determined by some input.
// A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
// A favorites property that is initialized at 0. This cannot be set by user input.
// An addSong method that adds a song to the songs property.

class Playlist {
    constructor(title) {
        this.title = title;
        this.song = [];
    }
    addSongs(song) {
        this.song.push(song);
    }

}

const favorites = new Playlist();


// Create an instance of the Playlist class.
const aDayToRe = new Playlist('Remember');
// Create an Album class that inherits from Playlist. It should also...
class Album extends Playlist {
  constructor(title,album){
    super(title);
    this.album = album;
    this.artist = [];
}
  art(artist){
    this.artist.push(artist);
  }
}
// Have an artist property that is determined by some input.

// Create an instance of the Album class.
const riseAgainst = new Album('Rise Against', 'Appeal to Reason');
