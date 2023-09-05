import createRestaurantHomePage from "./restaurant";
import createContactPage from "./contact";
import createMenuPage from "./menu";

const createTabs = () => {
  //   alert("hello world");
  const content = document.querySelector("#content");
  const divHome = document.createElement("div");
  const divMenu = document.createElement("div");
  const divContact = document.createElement("div");

  divHome.setAttribute("id", "home-btn");
  divMenu.setAttribute("id", "menu-btn");
  divContact.setAttribute("id", "contact-btn");

  divHome.classList.add("tab");
  divMenu.classList.add("tab");
  divContact.classList.add("tab");

  divHome.textContent = "Home";
  divMenu.textContent = "Menu";
  divContact.textContent = "Contact Us";

  content.appendChild(divHome);
  content.appendChild(divMenu);
  content.appendChild(divContact);

  divHome.addEventListener("click", () => {
    clearContent();
    createRestaurantHomePage();
  });

  divMenu.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });

  divContact.addEventListener("click", () => {
    clearContent();
    createContactPage();
  });
};

function clearContent() {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) content.removeChild(pageContent);
}

export default createTabs;
