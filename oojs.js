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
	constructor(title, songs, favorites){
		this.title = title;
		this.songs = [];
		this.favorites = favorites
	}

	addSong(song){
		this.songs.push(song);
		console.log(this.songs);
	}
}

class Album extends Playlist{
	constructor(title, songs, artist){
		super(title, songs);
		this.artist = artist
	}
}

const pearlJam = new Album("myJams", "Evenflow", "PearlJam");
console.log(pearlJam);


///Not quite there but need to move on to the second question. I love checkpoints.
