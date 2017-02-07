              // 201702061825L   EL LUNES   MARTES

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
      this.songs = songs;   // THIS IS AN ARRAY
                            // IXN ABOVE SAY "should contain multiple songs"
      this.favorites = 0;
    }
    addSong(songToAdd) {
      this.songs.push(songToAdd);
        console.log('inside Playlist cxr: ' + songToAdd);
    }
}
var myPlaylist = new Playlist("myPlaylist",               ["Take the Money","all you need"]);


        class Album extends Playlist {
            constructor(    artist,        title,         songs) {
                                                   // I WASNT PASSING IN THE LAST 2 ARGS THAT CLASS
                                                  // Playlist NEEDS FOR ITS CONSTRUCTOR
              super(                       title,         songs);
              this.artist = artist;
              this.album = 'GiantSteps';
            }
            addSong(artist) {
                console.log('inside Album cxr: ' + artist.name);
            }
        }
                //         artist         title             song
var myAlbum = new Album('booRadleys', 'interstellarSpace', ['myFavoriteThings']);
                                                            // NEEDED ARRAY NOTATION FOR songs
