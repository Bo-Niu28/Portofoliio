const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav__list");
const link = document.querySelectorAll(".nav__link");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav__open");
});
