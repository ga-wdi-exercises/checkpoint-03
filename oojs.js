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
  constructor(title, song){
      this.title = [];
      this.song = [];
      this.favorites = 0;
  }
  plTitle(chose){
    this.title.push(name);
    console.log(`My playlist is called ${name}`);
  }
  songTile(selection){
    this.song.push(selection);
    console.log(`Now playing ${selection}`);
  }
  addSong(songs){
    this.songs = []
    this.song.upshift(songs);
  }
}
let playlist = new Playlist("Dance", "Dancing on my own")
// class Album {
//   constructor(title, song, artist){
//   super(title, song)
//   this.artist = [];
// }
// }
