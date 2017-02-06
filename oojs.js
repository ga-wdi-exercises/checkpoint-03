// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.
class Playlist {
  constructor(title){
    this.title = title;
    this.songs = "The Ruler's Back, Takeover, Izzo(H.O.V.A.), Girls, Girls, Girls, Jigga That Nigga, U Don't Know, Hola' Hovito, Heart of the City (Ain't No Love), Never Change, Song Cry, All I Need, Renegade, Blueprint (Momma Loves Me), Breathe Easy (Lyrical Exercise), Girls, Girls, Girls (remix)",
    this.favorites = (0)
    this.addSong = "++";
  }
};

  //this addSongs one really confused me :(

// Create an instance of the Playlist class.
    var blue = new Playlist("The Blueprint");

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.
  var class = new Artist(Playlist);


// Create an instance of the Album class.
  var blueprint = new Album("Album");
