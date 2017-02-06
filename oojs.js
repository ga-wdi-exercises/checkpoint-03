// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

class Playlist {
  constructor(title,song){
    this.title = title;
    if (song.constructor === Array ){ //allows user to add multiple songs at once in an array
    this.songs = song;}
    else{
    this.songs = [].push(song);
    }
    this.favorites = 0;
  }
  addSong(song){
    this.songs = this.songs.push(song);
  }
}

class Album extends Playlist {
  constructor(title,song,artist){
    super();
    this.title = title;
    if (song.constructor === Array ){ //allows user to add multiple songs at once in an array
    this.songs = song;}
    else{
    this.songs = [].push(song);
    }
    this.favorites = 0;
    this.artist = artist;
  }
  addSong(song){
    this.songs = this.songs.push(song);
  }
}


// Create an instance of the Playlist class.

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.
