### 1

Define a `Playlist` class. It should have...
- A `title` (String) property that is determined by some input
- A `songs` (Array) property that is determined by some input. It should contain multiple songs, each of which can just be a song title (String).
- A `favorites` (Number) property that is initialized at 0. This cannot be set by user input.
- An `addSong` (Function) method that adds a song to the `songs` property

```js
class Playlist{
    constructor(playlistTitle){
        this.title = playlistTitle;
        this.songs = [];
        this.favorites = 0;
    }

    addSong(songName){
        this.songs.push(songName);
    }
}
```

### 2

Create an instance of the `Playlist` class.

```js
const SummerMix = new Playlist('Summer Mix');
```

### 3

Create an `Album` class that inherits from `Playlist`. It should also...
- Have an `artist` (String) property that is determined by some input

```js
class Album extends Playlist{
    constructor(artist){
        super()
        this.artist = artist;
    }
}
```

### 4

Create an instance of the `Album` class.

```js
const thundercat = new Album('Thundercat');
```
