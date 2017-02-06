// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a songs title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a songs to the songs property.

// Create an instance of the Playlist class.

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.

class Playlist {
    constructor(title, songs) {
      this.title = title;
      this.songs = songs;
      this.favorites = 0;
    }
    addSong(myPlaylist) {
        console.log('inside Playlist cxr: ' + myPlaylist.title);
    }
}
var myPlaylist = new Playlist("myPlaylist");
console.log('title: ' + myPlaylist.title);


class Album {
    constructor(artist) {
      this.name = artist;
    }
    addSong(artist) {
        console.log('inside Album cxr: ' + artist.name);
    }
}
var myAlbum = new Album('booRadleys');
console.log('artist: ' + myAlbum.artist);
