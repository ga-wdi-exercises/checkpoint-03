// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

class playList {
    constructor(title, songs) {
        this.title = title
        this.songs = []
        let favorites = 0;
    }
    addSong(){
        this.songs++
    }
}

// Create an instance of the Playlist class.
const cheers = new playList("Yoda Jams", "Careless Whisper")
// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

class album extends playList {
  constructor(artist){
        this.artist = artist
    }
}
// Create an instance of the Album class.
const interpol = new album("El Pintor")