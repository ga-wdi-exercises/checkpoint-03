// Define a Playlist class. It should have...
class Playlist {
  // A title property that is determined by some input.
  constructor(playName){
    this.playName = playName
  }
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  song(song1, song2, song3){
    [[this.song1 = song1,],
    [this.song2 = song2,],
    [this.song3 = song3]]
  }
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // favorites()
  // An addSong method that adds a song to the songs property.
  addSong(song){
    this.song = song().push
  }
}



// Create an instance of the Playlist class.
const playlist = new Playlist("blink")
// Create an Album class that inherits from Playlist. It should also...
class Album extends Playlist {
  // Have an artist property that is determined by some input.
}
// Create an instance of the Album class.
const california = new Album("b182")
