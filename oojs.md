### 1

Define a `Playlist` class. It should have...
- A `title` (String) property that is determined by some input
- A `songs` (Array) property that is determined by some input. It should contain multiple songs, each of which can just be a song title (String).
- A `favorites` (Number) property that is initialized at 0. This cannot be set by user input.
- An `addSong` (Function) method that adds a song to the `songs` property

```js
class Playlist={
  constructor(title="",songs=[]){
    this.title=title;
    this.songs=songs
  }   
  favorites:0;
   addSong:function(){
     Playlist.push(songs)
   }

}
```

### 2

Create an instance of the `Playlist` class.

```js
var object1=new Playlist("Rock",["Summer","Time"])
```

### 3

Create an `Album` class that inherits from `Playlist`. It should also...
- Have an `artist` (String) property that is determined by some input

```js
class Album extends Playlist={

  artist:function(artist){
    this.artist=artist;
  }
  Album.push(artist)
}
```

### 4

Create an instance of the `Album` class.

```js
var album1=new Album("Mymusic")
```
