const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation");
const showNav = () => {
  nav.classList.toggle("nav");
  burger.classList.toggle("white");
};

burger.addEventListener("click", showNav);
nav.addEventListener("click", showNav);
