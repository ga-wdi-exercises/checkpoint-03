// Define a Playlist class. It should have...
  // A PLAYLIST title property that is determined by some input.
  // A songs TITLE property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

// Create an instance of the Playlist class.

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.

//Second attempt
class Playlist{
 constructor(pltitle){
   this.pltitle = title;
   this.songtitle = [];
 }
 addSong(song){
 this.songtitle.push(song);
 console.log(this.songtitle)
 }

}
let playlist1 = new Playlist("Car Favs")




//First attempt
// class Playlist {
//   constructor(title, songs){
//     this.title = title;
//     this.songs = songs;
//     this.favorites = 0;
//     this.song = [];
//   }
//   addSong(songs){
//     this.song.push(songs);
//     console.log(this.song);
//
//   }
//
// }
// const go = new Playlist("Go");
