// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

  class Playlist{
    constructor(title,songs){
      this.title = title
      this.songs = songs
      this.favorites = 0
    }
    addSong(newSong){
      this.songs.push('newSong')
    }
  }

// Create an instance of the Playlist class.

let playlist1 = new Playlist('bangers',['1','2','3'])

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

  class Album extends Playlist{
    constructor(title,songs,artist){
      super(title,songs)
      this.artist = artist
    }
  }

// Create an instance of the Album class.

let album1 = new Album('fido')
