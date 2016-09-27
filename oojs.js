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
  constructor(title) {
    this.title = title;
    this.songs = [];
    this.favorites = 0;
  }
  addSong(song) {
    this.songs.push(song);
  }
}

// workoutMix = new Playlist('Workout Mix');
//
// class Album extends Playlist{
//   constructor(title, artist) {
//     super(title);
//     this.artist = artist;
//   }
// }
//
// darkSideOfTheMoon = new Album('Dark Side of the Moon', 'Pink Floyd');
