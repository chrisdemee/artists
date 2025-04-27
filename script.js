// Shared artist list
var artists = [
    "Tyler, The Creator", "Radiohead", "Kendrick Lamar", "Travis Scott",
    "Frank Ocean", "JID", "Daniel Caesar", "Jpegmafia", "Deftones", "Denzel Curry"
  ];
  
  // HOME: Random artist generator
  function showArtist() {
    var randomIndex = Math.floor(Math.random() * artists.length);
    var artist = artists[randomIndex];
    document.getElementById("artist-output").innerText = "You should listen to: " + artist;
  }
  
  // GALLERY: List all artists
  function listArtists() {
    var list = document.getElementById("artist-list");
    for (var i = 0; i < artists.length; i++) {
      var item = document.createElement("li");
      item.innerText = artists[i];
      list.appendChild(item);
    }
  }
  
  // drag and drop
  var dragged;
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    dragged = event.target;
  }
  
  function drop(event) {
    event.preventDefault();
    var target = event.target;
    if (target.tagName === "LI" && dragged !== target) {
      var list = target.parentNode;
      list.insertBefore(dragged, target);
    }
  }
  