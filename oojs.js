// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

// Create an instance of the Playlist class.

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.


class Playlist{
  constructor(title, songTitle){
    let favorites =0;
    this.title = title;
    this.songs = [];
    this.songs.push(songTitle);
  }
  addSong(songTitle){
    this.songs.push(songTitle);
  }// end add song

}//end class


let stuff = new Playlist('hello','goodbye');


class Album extends Playlist{
  constructor(title, songTitle, artist){
    super(title,songTitle);
    this.artist = artist;
  }//end constructor

}//end class


let newStuff = new Album('hello','goodbye', 'myfriend');
