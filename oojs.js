class Playlist {
  constructor(title, song1, song2) {
  this.title = title;
  this.songs = [song1, song2];
  this.favorites = 0;
  var addSong = function(song) {
    this.songs.push(song);
    }
  }
}

var hits = new Playlist("Indie Hits", "Ocean Eyes", "GFY");

class Album extends Playlist {
  constructor (title, song1, song2, artist) {
  super(title, song1, song2);
    this.artist = artist;
  }
}

var indieAlbum = new Album("Indie Hits", "Ocean Eyes", "GFY", "MGMT");
