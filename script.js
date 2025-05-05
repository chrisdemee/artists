// Shared artist list
var artists = [
    "Tyler, The Creator", "Radiohead", "Kendrick Lamar", "Travis Scott",
    "Frank Ocean", "Brockhampton", "Daniel Caesar", "Jpegmafia", "Deftones", "Denzel Curry"
  ];

  
  //images and captions 
  var artistImages = [
    "https://media.pitchfork.com/photos/676c2042452b9f87aafdf747/16:9/w_2880,h_1620,c_limit/Tyler-the-Creator.jpg",
    "https://media.npr.org/assets/img/2021/12/09/radiohead-comp-x-holborn-studios-2000-c-tom-sheehan-1-scaled_custom-6b86eaeca2056b60666092a135e512ca36b81da1.jpg",
    "https://cdn.britannica.com/51/259151-050-3D9EDA09/rapper-kendrick-lamar-performs-onstage-at-rolling-loud-miami-2022.jpg",
    "https://www.usatoday.com/gcdn/presto/2021/11/06/USAT/284899c9-bcb4-4b56-b5df-59d75803d411-GTY_1351603671.jpg",
    "https://i0.wp.com/ourgenerationmusic.com/wp-content/uploads/2023/04/img_5201.jpg?fit=4166%2C2731&ssl=1",
    "https://variety.com/wp-content/uploads/2022/11/GettyImages-1010730000.jpg",
    "https://www.billboard.com/wp-content/uploads/media/Daniel-Ceasar-late-night-2017-billboard-1548.jpg",
    "https://www.billboard.com/wp-content/uploads/2021/09/JPEGMAFIA-lollapolooza-2021-billboard-1548-1631048130.jpg",
    "https://preview.redd.it/share-some-of-your-favorite-pictures-of-deftones-performing-v0-g2bw0iqftd5c1.jpg?width=2000&format=pjpg&auto=webp&s=fb8578421118a9fb8ffe97d669d431871d0f9cee",
    "https://ca.billboard.com/media-library/denzel-curry-performs-at-the-bonnaroo-music-arts-festival-on-june-17-2022-in-manchester-tennessee.jpg?id=54697539&width=980"
  ];

  var artistCaptions = [
    "Top Album: Igor (2019)",
    "Top Album: Ok Computer (1997)",
    "Top Album: To Pimp A Butterfly (2015)",
    "Top Album: Rodeo (2015)",
    "Top Album: Blonde (2016)",
    "Top Album: Saturation 2 (2017)",
    "Top Album: Freudian (2017)",
    "Top Album: LP; Offline! (2021)",
    "Top Album: White Pony (2000)",
    "Top Album: Taboo|Ta13oo (2018)"
  ];
  var lyrics = [
    `"I'm in love with the light, but I live in the dark" – Tyler, The Creator`,
    `"Immerse your soul in love" – Radiohead`,
    `"I remember syrup sandwiches and crime allowances" – Kendrick Lamar`,
    `"Uh, watchin' Family Guy, no way to pause it (Alright)" – Travis Scott`,
    `"Less morose and more present, dwell on my gifts for a second" – Frank Ocean`,
    `"And we said forever, forever dont last to long" – Brockhampton`,
    `"It's never over until life ends" – Daniel Caesar`,
    `"I let it hit, brewin that coffee I'm takin' a sip" – Jpegmafia`,
    `"You're shooting stars from the barrel of your eyes. It drives me crazy, just drives me wild" – Deftones`,
    `"I am the one, don't weigh a ton, Don't need a gun to get respect up on the street" – Denzel Curry`
  ];
  
  function showLyric() {
    var randomIndex = Math.floor(Math.random() * lyrics.length);
    document.getElementById("lyric-output").innerText = lyrics[randomIndex];
  }
  

  // HOME: Random artist generator
  function showArtist() {
    var randomIndex = Math.floor(Math.random() * artists.length);
    var artist = artists[randomIndex];
    document.getElementById("artist-output").innerText = "You should listen to: " + artist;
  }
  
  // GALLERY: List all artists
  function listArtists() {
    var leftList = document.getElementById("artist-list-left");
    var rightList = document.getElementById("artist-list-right");
  
    for (var i = 0; i < artists.length; i++) {
      var item = document.createElement("li");
      item.className = "list-group-item";
      item.innerText = artists[i];
  
      // Add hover listeners
      (function(index) {
        item.addEventListener("mouseover", function () {
          showCard(index);
        });
        item.addEventListener("mouseout", function () {
          hideCard();
        });
  
        item.setAttribute("draggable", "true");
        item.addEventListener("dragstart", drag);
        item.addEventListener("dragover", allowDrop);
        item.addEventListener("drop", drop);
      })(i);
  
      // Distribute evenly: first 5 go left, rest go right
      if (i < 5) {
        leftList.appendChild(item);
      } else {
        rightList.appendChild(item);
      }
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
    //keeps the lsit behavior clean and keeps bugs away
    // and makes sure item isnt being dropped on itself
    if (target.tagName === "LI" && dragged !== target) {
      var list = target.parentNode;
      list.insertBefore(dragged, target);
    }
  }
  