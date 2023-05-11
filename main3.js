const db = {
  id: "app53N0gvO7xl9NB8",
  table: "tattoo",
  apiKey: "keyzJ9RlZVLsdVb9O",
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`;


const slideshowContainer = document.getElementById('slideshow-container');
console.log(slideshowContainer);
let tattoos = [];

const fetchTattoos = async () => {
  return fetch(airtableUrl).then((data) => data.json());
};

const main = async () => {
    const response = await fetchTattoos();
    console.log(response);
    tattoos = response.records;
};

function myFunction() {
  // alert("I am an alert box!");
  console.log("arm was clicked ");

  var arm = document.getElementById("arm");
  var bodyparts = document.getElementsByClassName("body");
var button1 = document.getElementById("prevButton");
var button2 = document.getElementById("nextButton");

  console.log("bodyparts was clicked", bodyparts);

  for (var i = 0; i < bodyparts.length; i++) {
    if (bodyparts[i].getAttribute("id") != "arm") {
      bodyparts[i].style.opacity = 0;
    
    }
  }
  arm.style.fontSize = "250px";
 
button1.style.opacity = 1;
button2.style.opacity = 1;
  const armItems = tattoos.filter(tattoo => tattoo.fields.Location === "Arm");
  console.log(armItems);
  buildSlideshow(armItems);
}

function myFunction2() {
  console.log("leg was clicked");

  var leg = document.getElementById("leg");
  var bodyparts = document.getElementsByClassName("body");
  var button1 = document.getElementById("prevButton");
  var button2 = document.getElementById("nextButton");
  console.log("bodyparts was clicked", bodyparts);

  for (var i = 0; i < bodyparts.length; i++) {
    if (bodyparts[i].getAttribute("id") != "leg") {
      bodyparts[i].style.opacity = 0;
    }
  }
  leg.style.fontSize = "250px";
  leg.style.gridColumn = "1";
  leg.style.gridRow = "1";
  button1.style.opacity = 1;
button2.style.opacity = 1;

  const armItems = tattoos.filter(tattoo => tattoo.fields.Location === "Leg");
  console.log(armItems);
  buildSlideshow(armItems);
}

function myFunction3() {
  console.log("hand was click ed");

  var hand = document.getElementById("hand");
  var bodyparts = document.getElementsByClassName("body");
  var button1 = document.getElementById("prevButton");
  var button2 = document.getElementById("nextButton");

  console.log("bodyparts was clicked", bodyparts);

  for (var i = 0; i < bodyparts.length; i++) {
    if (bodyparts[i].getAttribute("id") != "hand") {
      bodyparts[i].style.opacity = 0;
    }
  }
  hand.style.fontSize = "200px";
  hand.style.gridColumn = "1";
  hand.style.gridRow = "1";
  button1.style.opacity = 1;
button2.style.opacity = 1;

  const armItems = tattoos.filter(tattoo => tattoo.fields.Location === "Hand");
  console.log(armItems);
  buildSlideshow(armItems);
}

function myFunction4() {
  console.log("neck was clicked");

  var neck = document.getElementById("neck");
  var bodyparts = document.getElementsByClassName("body");
  var button1 = document.getElementById("prevButton");
  var button2 = document.getElementById("nextButton");

  console.log("bodyparts was clicked", bodyparts);

  for (var i = 0; i < bodyparts.length; i++) {
    if (bodyparts[i].getAttribute("id") != "neck") {
      bodyparts[i].style.opacity = 0;
    }
  }
  neck.style.fontSize = "200px";
  neck.style.gridColumn = "1";
  neck.style.gridRow = "1";
  button1.style.opacity = 1;
button2.style.opacity = 1;

  const armItems = tattoos.filter(tattoo => tattoo.fields.Location === "Neck");
  console.log(armItems);
  buildSlideshow(armItems);

}

function myFunction5() {
  console.log("torso was clicked");

  var torso = document.getElementById("torso");
  var bodyparts = document.getElementsByClassName("body");
  var button1 = document.getElementById("prevButton");
  var button2 = document.getElementById("nextButton");

  console.log("bodyparts was clicked", bodyparts);

  for (var i = 0; i < bodyparts.length; i++) {
    if (bodyparts[i].getAttribute("id") != "torso") {
      bodyparts[i].style.opacity = 0;
    }
  }
  torso.style.fontSize = "200px";
  torso.style.gridColumn = "1";
  torso.style.gridRow = "1";
  button1.style.opacity = 1;
button2.style.opacity = 1;
  const armItems = tattoos.filter(tattoo => tattoo.fields.Location === "Torso");
  console.log(armItems);
  buildSlideshow(armItems);

}

function myFunction6() {
  console.log("butt was clicked");

  var butt = document.getElementById("butt");
  var bodyparts = document.getElementsByClassName("body");
  var button1 = document.getElementById("prevButton");
  var button2 = document.getElementById("nextButton");

  console.log("bodyparts was clicked", bodyparts);
  for (var i = 0; i < bodyparts.length; i++) {
    if (bodyparts[i].getAttribute("id") != "butt") {
      bodyparts[i].style.opacity = 0;
    }
  }
  butt.style.fontSize = "200px";
  butt.style.gridColumn = "1";
  butt.style.gridRow = "1";
  button1.style.opacity = 1;
button2.style.opacity = 1;

  const armItems = tattoos.filter(tattoo => tattoo.fields.Location === "Butt");
  console.log(armItems);
  buildSlideshow(armItems);

}
  


const list = [
  "js/images/1.png",
  "js/images/2.png",
  "js/images/3.png",
  "js/images/4.png",
  "js/images/5.png",
  "js/images/6.png",
  "js/images/7.png",
  "js/images/8.png",
  "js/images/9.png",
];

let position = 0;
function nextimage() {
  position = position + 1;
  if (position >= list.length) {
    position = 0;
  }
  const next = list[position];
  var image = document.getElementById("png");
  image.setAttribute("src", next);
}

function previmage() {
  position = position - 1;
  if (position <= 0) {
    position = list.length;
  }
  const prev = list[position];
  var image = document.getElementById("png");
  image.setAttribute("src", prev);
}


const buildSlideshow = (movies) => {
  console.log(movies);
  console.log(buildSlide(movies[0]));

  const firstMovie = buildSlide(movies[0]);
  slideshowContainer.append(firstMovie);

  let currentMovie = 0;

  prevButton.addEventListener('click', () => {
      if (currentMovie === 0) {
          currentMovie = movies.length - 1;
      } else {
          currentMovie = currentMovie - 1;
      }

      const movieRecord = movies[currentMovie];
      swapSlide(movieRecord);
  });

  nextButton.addEventListener('click', () => {
      if (currentMovie === movies.length - 1) {
          currentMovie = 0;
      } else {
          currentMovie = currentMovie + 1;
      }

      const movieRecord = movies[currentMovie];
      swapSlide(movieRecord);
  });
};

const swapSlide = (movieRecord) => {
  const slideEl = buildSlide(movieRecord);

  slideshowContainer.innerHTML = '';
  slideshowContainer.append(slideEl);
};

const buildSlide = (movie) => {
  const movieContainer = document.createElement('article');
  if (movie.fields.Photo) {
      console.log(movie.fields.Photo[0].url);
      const posterImg = document.createElement('img');
      posterImg.src = movie.fields.Photo[0].url;
      posterImg.classList.add('poster-img');
      posterImg.id = 'poster-img-id';
      movieContainer.append(posterImg);
  }

  //if (movie.fields.description) {
  //    const descriptionEl = document.createElement('p');
  //    descriptionEl.innerHTML = movie.fields.description;
  //    descriptionEl.classList.add('movie-description');
  //    movieContainer.append(descriptionEl);
  //}
  return movieContainer;
};



main();