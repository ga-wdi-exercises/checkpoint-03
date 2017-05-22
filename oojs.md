### 1

Define a `Playlist` class. It should have...
- A `title` (String) property that is determined by some input
- A `songs` (Array) property that is determined by some input. It should contain multiple songs, each of which can just be a song title (String).
- A `favorites` (Number) property that is initialized at 0. This cannot be set by user input.
- An `addSong` (Function) method that adds a song to the `songs` property

```js
Your answer goes here
<!-- Beginning of answer. -->
class playList {
		constructor(title, song){
		this.title = title;
		this.song = [];
		this.favorites = prompt("Add rating of favorites from 0-5 here.");
	}
	addSong(){
		this.song = prompt("Add song of choice to current play list you are creating.")
	}
}
<!-- End of my answer here. -->

### 2

Create an instance of the `Playlist` class.

```js
Your answer goes here
<!-- Beginning of answer here. -->
const list1 = new playList("Burning Bridges", "American Love");
	console.log(list1.title)
	console.log(list1.song)
	list1.addSong();
<!-- End of answer here. -->
### 3

Create an `Album` class that inherits from `Playlist`. It should also...
- Have an `artist` (String) property that is determined by some input

```js
Your answer goes here
<!-- Beginning of answer here. -->
class Album extends playList {
	constructor(artist){
		this.artist = artist;
	}
}
<!-- End of answer here. -->

### 4

Create an instance of the `Album` class.

```js
Your answer goes here
<!-- Beginning of answer here. -->
const album1 = new Album("Burning Bridges", "Pressure Of The Hinges", "Haste The Day");
	console.log(album1.artist)
	console.log(album1.title)
	console.log(album1.song)
<!-- End of answer here. -->
