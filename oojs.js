// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.
class Playlist {
  constructor(title, songs, favorites) {
    this.title = [];
    this.songs = ["baby", "missing you", "only one"];
    this.favorites = 0;
  }
  addSong(song){
    this.songs.push("rainfall");

  }
}
console.log(song);
// Create an instance of the Playlist class.
let playList = new Playlist("love song")
// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.
class Album extends Playlist{
  constructor(title, songs, favorites, artist)
  super(title, songs, favorites){
    this.artist = []
  }
}


// Create an instance of the Album class.
