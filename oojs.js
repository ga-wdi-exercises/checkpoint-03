// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

class Playlist {
  constructor(title, song1, song2, song3) {
    this.title = title
    this.songs = [song1, song2, song3]
    this.favorites = 0
  }
  addSong(song) {
    this.songs.push(song)
  }
}

// Create an instance of the Playlist class.

let trailmix = new Playlist("Trail Mix", "Peanuts Theme", "Lose Yourself", "Pretzel Logic")

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

class Album extends Playlist {
  constructor(title, song1, song2, song3, artist) {
    super(title, song1, song2, song3)
    this.artist = artist
  }
}

// Create an instance of the Album class.
let cranberries = new Album("Trail Mix", "Peanuts Theme", "Lose Yourself", "Pretzel Logic", "The Cranberries")
