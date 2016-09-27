// Define a Playlist class. It should have...
//
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.
  music class Playlist {
    constructor(songTitle, genre){
    this.songTitle = songTitle;
    this.genre = genre;
    this.songs = ["Achey Breaky Heart", "Bad to the Bone", "Miami"]
    favorites = 0
  },
  addSong(addSong) {
    this.songs.add(addSong);
  },


  }

// Create an instance of the Playlist class.
Playlist myPlayList = new Playlist();
// Create an Album class that inherits from Playlist. It should also...
class Album extends Playlist {
  constructor(songTitle, genre){
  this.artist = [];
}
}

  // Have an artist property that is determined by some input.

// Create an instance of the Album class.
