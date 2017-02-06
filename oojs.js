// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

class Playlist {
  constructor(title, songs = []) {
    this.playlistTitle = title;
    this.songList = songs;
    this.favorites = 0;
  }
  addSong(addSongName) {
    this.songList.push(addSongName);
  }
}
// Create an instance of the Playlist class.
const starLord = new Playlist("Awesome Mix Vol. 1",["Hooked on a Feeling","Go All the Way","Spirit in the Sky","Moonage Daydream","Fooled Around and Fell in Love","I'm Not in Love","I Want You Back","Come and Get Your Love","Cherry Bomb","Escape (The Piña Colada Song)","O-o-h Child","Ain't No Mountain High Enough"])

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.
class Album extends Playlist {
  constructor(title, songs, artist = 'unknown') {
    super(title, songs);
    this.artistName = artist;
  }
}

// Create an instance of the Album class.
const taySwiz89 = new Album("1989",["Welcome to New York","Blank Space","Style","Out of the Woods","All You Had to Do Was Stay","Shake It Off","I Wish You Would","Bad Blood","Wildest Dreams","How You Get the Girl","This Love","I Know Places","Clean"],"Taylor Swift")
