### 1

Define a `Playlist` class. It should have...
- A `title` (String) property that is determined by some input
- A `songs` (Array) property that is determined by some input. It should contain multiple songs, each of which can just be a song title (String).
- A `favorites` (Number) property that is initialized at 0. This cannot be set by user input.
- An `addSong` (Function) method that adds a song to the `songs` property

```js
Your answer goes here
```
class Playlist {
  constructor(title, songs, favorites) {
    this.title = title;
    this.songs = songs;
    this.favorites = 0;
  }
  addSong(song) {
    this.songs.push(song)
    return "New song has been added";
  }
  }

### 2

Create an instance of the `Playlist` class.

```js

const music = new Playlist("Electronic", "Get Lucky", "5")

```

### 3

Create an `Album` class that inherits from `Playlist`. It should also...
- Have an `artist` (String) property that is determined by some input

```js

class Album extends Playlist {
  constructor(title, songs, favorites, artist) {
    this.artist = artist;
  }
}

```

### 4

Create an instance of the `Album` class.

```js

const newAlbum = new Album("RAM", "Get Lucky", "10", "Daft Punk")

```
