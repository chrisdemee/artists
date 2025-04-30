// Shared artist list
var artists = [
    "Tyler, The Creator", "Radiohead", "Kendrick Lamar", "Travis Scott",
    "Frank Ocean", "JID", "Daniel Caesar", "Jpegmafia", "Deftones", "Denzel Curry"
  ];
  //images and captions 
  var artistImages = [
    "images/tyler.jpg",
    "images/billie.jpg",
    "images/kendrick.jpg",
    "images/lana.jpg",
    "images/frank.jpg",
    "images/doja.jpg",
    "images/sza.jpg",
    "images/gambino.jpg",
    "images/weeknd.jpg",
    "images/paramore.jpg"
  ];

  var artistCaptions = [
    "Odd Future king 🎩",
    "Bad guy energy 🌪️",
    "Pulitzer prize poet 📝",
    "Queen of dreamy sadness 🌊",
    "Mysterious R&B genius 🌈",
    "Hot Pink vibes 💖",
    "Ctrl over the soul 🎶",
    "This is America 🇺🇸",
    "Starboy forever 🌟",
    "Riot legends ⚡"
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
      
      (function(index) {
        item.addEventListener('mouseover', function() {
          showCard(index);
        });
        item.addEventListener('mouseout', function() {
          hideCard();
        });
      })(i);
      
      list.appendChild(item);
    }
  }
  

// Show card on hover
function showCard(index) {
  var card = document.getElementById('hover-card');
  var cardImage = document.getElementById('card-image');
  var cardCaption = document.getElementById('card-caption');
  
  if (artistImages[index]) {
    cardImage.src = artistImages[index];
    cardCaption.innerText = artistCaptions[index];
  } else {
    cardImage.src = "images/default.jpg";
    cardCaption.innerText = "Image not available";
  }
  
  card.classList.add('active');
}

// Hide card when not hovering
function hideCard() {
  var card = document.getElementById('hover-card');
  card.classList.remove('active');
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
  