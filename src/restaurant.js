// restaurant.js

const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  //Create and append image element
  const image = document.createElement("img");
  image.src =
    "https://1.bp.blogspot.com/-mYX0Zyo-RKo/U4EfgfcHC3I/AAAAAAAARZg/1CS4jf9Iwno/s1600/senmonorom+restaurant+lowell.jpg";
  image.height = "300";
  pageContent.appendChild(image);

  //Crate and append headline element
  const headLine = document.createElement("h1");
  headLine.textContent = "Welcome to Senmonorem";
  pageContent.appendChild(headLine);

  const copy = document.createElement("p");
  copy.textContent = "We serve the best food in Lowell.";
  pageContent.appendChild(copy);
  content.appendChild(pageContent);
};

export default createRestaurantHomePage;
