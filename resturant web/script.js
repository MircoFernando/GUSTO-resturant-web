//Mobile Nav bar
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Changing the background of the nav bar when scrolled
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});