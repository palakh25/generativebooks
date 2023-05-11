

const db = {
  id: "app53N0gvO7xl9NB8",
  table: "table",
  apiKey: "keyzJ9RlZVLsdVb9O",
};

const airtableUrl = 'https://airtable.com/app53N0gvO7xl9NB8/api/docs';
// `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`;

const container = document.getElementById('container');
let images = [];

const fetchImages = async () => {
  return fetch(airtableUrl).then((data) => data.json());
}

const createImageSection = (imageUrl, index) => {
   
        const sectionId = `section-${index}`;
        const section = document.createElement("section");
        section.setAttribute("id", sectionId);
        
        const imageLink = document.createElement("a"); // create a link
        imageLink.setAttribute("href", `page2.html#${sectionId}`); // set href attribute to the corresponding section id
        imageLink.style.textDecoration = "none"; // remove underline style from link
        
        const image = document.createElement("img");
        image.setAttribute("src", imageUrl);
        image.style.maxWidth= "500px";
        image.style.height ="auto";
        
        imageLink.appendChild(image); // add image to link
        section.appendChild(imageLink); // add link to section
        container.appendChild(section);
      };
      
//   const sectionId = `section-${index}`;
//   const section = document.createElement("section");
//   section.setAttribute("id", sectionId);
  
//   const image = document.createElement("img");
//   image.setAttribute("src", imageUrl);
 
//   section.appendChild(image);
//   container.appendChild(section);
  
//   image.addEventListener("click", () => {
//     window.location.hash = `#${sectionId}`;
//   });
// };

const createFullImageSection = (imageUrl, index) => {
  const sectionId = `full-section-${index}`;
  const section = document.createElement("section");
  section.setAttribute("id", sectionId);
  
  const image = document.createElement("img");
  image.setAttribute("src", imageUrl);
  image.style.maxWidth= "100%";
  image.style.height ="auto";
  
  section.appendChild(image);
  document.body.appendChild(section);
  
  image.addEventListener("click", () => {
    window.location.hash = `#${sectionId}`;
  });
};

const fetchAndCreateImages = async () => {
  const response = await fetchImages();
  images = response.records;
  
  images.forEach((image, index) => {
    const imageUrl = image.fields.Attachments[0].url;
    createImageSection(imageUrl, index);
  });
};

const fetchAndCreateFullImages = async () => {
  const response = await fetchImages();
  images = response.records;
  
  images.forEach((image, index) => {
    const imageUrl = image.fields.Attachments[0].url;
    createFullImageSection(imageUrl, index);
  });
};

const loadMore = () => {
  const newContainer = container.cloneNode(false);
  newContainer.removeAttribute("id");
  document.body.appendChild(newContainer);
  
  fetchAndCreateImages();
};

document.addEventListener("scroll", () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    loadMore();
  }
});

fetchAndCreateImages();
fetchAndCreateFullImages();

const linkToPage2 = document.createElement("a");
linkToPage2.href = "page2.html";
linkToPage2.innerHTML = "Go to Page 2";
document.body.appendChild(linkToPage2);