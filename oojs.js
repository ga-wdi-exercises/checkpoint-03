// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.
class Playlist {
  constructor (title, list){
    this.title = title
    this.list = []
    this.favorites = 0
  }
  addSong(song){
    this.list.push(this.song)
    console.log(`${song} has been added to "list".`);
  }
}
// Create an instance of the Playlist class.
let song1 = new Playlist("Vivo","Viva La Vida")
song1.addSong('Viva La Vida')
// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.
class Album extends Playlist {
  constructor(title,list,artist){
    super(title,list);
    this.artist = artist;
  }
  singOn(){
    console.log(`${this.list} in ${this.title} by ${this.artist} has been added`)
  }
}
// Create an instance of the Album class.
let album1 = new Album('Vivo',"Viva La Vida","Coldplay")
album1.singOn()
