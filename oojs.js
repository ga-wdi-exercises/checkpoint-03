// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.
class Playlist {
  constructor (title, song){
    this.title = title
    this.song = []
    this.favorites = 0
  }
  addSong(track){
    this.song.push(track)
    console.log(`${this.song} has been added to "songs".`);
  }
}
// Create an instance of the Playlist class.
let song1 = new Playlist("Vivo","Viva La Vida")
// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.
class Album extends Playlist {
  constructor(title,song,artist){
    super(title,song);
    this.artist = artist;
  }
  alert(){
    return `${this.song} in ${this.title} by ${this.artist} has been added`
  }
}
// Create an instance of the Album class.
const album1 = new Playlist('Vivo',"Viva La Vida","Coldplay")
