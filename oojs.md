### 1

Define a `Playlist` class. It should have...
- A `title` (String) property that is determined by some input
- A `songs` (Array) property that is determined by some input. It should contain multiple songs, each of which can just be a song title (String).
- A `favorites` (Number) property that is initialized at 0. This cannot be set by user input.
- An `addSong` (Function) method that adds a song to the `songs` property

```js
var titleText = document.getElementById('title').value
var songsText = document.getElementById('songs').value
var songsArray = []
var favorites = 0;

class Playlist {
  constructor(title, songs) {
    this.title  = titleText;
    while (songsText != ""){
      songsArray.push(songsText);
    }
  }
  addSong(songAdded){
    songsArray.push(songAdded)
  }
}
```

### 2

Create an instance of the `Playlist` class.

```js
var fireJams = new Playlist("Supa Hot Fiya", "Despacito");
```

### 3

Create an `Album` class that inherits from `Playlist`. It should also...
- Have an `artist` (String) property that is determined by some input

```js
var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};
class Album {
  constructor(artist){
    this.artist = artist;
  }
}
inheritsFrom(Album, Playlist);
```

### 4

Create an instance of the `Album` class.

```js
var myMixTape = new Album("theWolf");
```
