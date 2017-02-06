// Define a Playlist class. It should have...
  // A title property that is determined by some input.
  // A songs property that is determined by some input. It should contain multiple songs, each of which can just be a song title.
  // A favorites property that is initialized at 0. This cannot be set by user input.
  // An addSong method that adds a song to the songs property.

// Create an instance of the Playlist class.

// Create an Album class that inherits from Playlist. It should also...
  // Have an artist property that is determined by some input.

// Create an instance of the Album class.

//defining a playlist class
 class playlist{
   constructor(title){
     this.title = title;
     this.songs = [];
     this.favorites = 0;

   }
// adding a method that adds a song to the playlist
   addSong(songtitle){
      this.songtitle = songtitle;
      this.songs.push(`${songtitle}`);
     }

 }
//creat an instance of the playlist class
  let  playlist1  = new playlist("rock");
  let playlist2 = new playlist("pop");

  console.log(playlist1);
  console.log(playlist2);
  console.log(this.songs);
   playlist1.addSong("burning love");

    playlist2.addSong("dangerous");
    playlist2.addSong("beatit");
    playlist2.addSong("Thriller");

    class album extends playlist{

           constructor(title,artist){
             super(title);
             this.artist = artist;
           }
    }

          let michealAlbum = new album("Dangerous", "Micheal Jackson");
          let weekndAlbum = new album("Starboy", "Abel Tesfaye");

    console.log(michealAlbum);
    console.log(weekndAlbum);
