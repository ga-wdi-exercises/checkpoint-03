### 1

Define a `Playlist` class. It should have...
- A `title` (String) property that is determined by some input
- A `songs` (Array) property that is determined by some input. It should contain multiple songs, each of which can just be a song title (String).
- A `favorites` (Number) property that is initialized at 0. This cannot be set by user input.
- An `addSong` (Function) method that adds a song to the `songs` property

```js

var playlist = {
  title: "Study Sesh",
  song: ["Believer", "Thats What I Like", "Somethink Just Like This", "Issues", "Shape of You", "Stay"],
  favorites: song[1, 3, 5],

  addSong: function() {
    this.song.push();
    return "Song Added!"
  }
  playlist.song = new Song ("Can't Stop the Feeling!")
  }
```

### 2

Create an instance of the `Playlist` class.

```js
var playlist2 = new Playlist("Chill Sesh", ["Sign of the times", "I'm the One", "Humble", "Whatever it takes"], [0, 1, 2]);

```

### 3

Create an `Album` class that inherits from `Playlist`. It should also...
- Have an `artist` (String) property that is determined by some input

```js
let Album extends playlist {
  constructor(artist, title, song) {
    super(title, song);
    artist = []

    }
    newArtist(){
      return `This artist is ${this.artist}`
    }
  }

```

### 4

Create an instance of the `Album` class.

```js
const album3 = new Album("Katy Perry", "Witness" "Swish Swish");

```
