// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

var favourites = [];

class Playlist {
  constructor(title, songs) {
    var favourites = [];
    this.title = title;
    this.songs = songs;
  }
  addSongs (songs) {
    this.songs = songs;
  }
  addFavourites(songs) {
    this.songs = songs;
    favourites.push(songs);
  }
}
// Create an instance of the Playlist class.
var Album1 = new Playlist("Bruno Mars" , "24k magic");
var Album2 = new Playlist("New Album", "I dunno");
var Song1 = new Playlist("Drake - We Made it");



// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.
// class Album extends Playlist {
//     constructor(artist) {
//       this.artist = artist;
//     }
//   }
//
// // Create an instance of the Album class.
//
// var AlbumSomething = new Album("Bruno Mars");
// var AlbumSomething2 = new Album("Drake");
// // album.artist("Drake");
