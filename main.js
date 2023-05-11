const db = {
  id: "app53N0gvO7xl9NB8",
  table: "tattoo",
  apiKey: "keyzJ9RlZVLsdVb9O",
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`;

const container = document.getElementById('container');
console.log(container);
let images = [];

const fetchImages = async () => {
  return fetch(airtableUrl).then((data) => data.json());
};

const main = async () => {
  const response = await fetchImages();
  console.log(response);
  images = response.records;
  console.log("Attachments" + images);

  for (let i = 0; i < images.length; i++) {
    const records = images[i].fields.Attachments[0].url;
    console.log(records);

    var img = document.createElement("img");
    img.setAttribute("src", records);

    img.setAttribute("class", "photos");
    img.style.maxWidth = "500px";
    img.style.height = "auto";
    img.style.cursor = "pointer";
    // gpt
    img.addEventListener("click", function () {
      // const page='page2.html#section'+ '1';

      // window.location.href = page;
      console.log(images[i].fields.category)
       const page='categories/' + images[i].fields.category + '.html' ;

       window.location.href = page;
    });

    // gpt

    

    container.appendChild(img);
  }
};

var loadmore = function () {
  var newcontainer = container.cloneNode(true);
  newcontainer.removeAttribute("id");
  document.body.appendChild(newcontainer);
};

document.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadmore();
  }
});

// window.addEventListener("scroll", () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     // When user has scrolled to bottom of page, append content to the beginning of the content element
//     const container = document.querySelector("#container");
//     const clonedContainer = container.cloneNode(true);
//     container.parentNode.insertBefore(clonedContainer, container);
//   }
// });

main();
