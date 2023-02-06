// const hamb = document.querySelector("#burger");
// const popup = document.querySelector("#popup");
// const body = document.body;

// const menu = document.querySelector("#menu").cloneNode(1);
// const socialIcons = document.querySelector("#socials").cloneNode(1);

// hamb.addEventListener("click", hambHandler);

// function hambHandler(e) {
//   e.preventDefault();
//   popup.classList.toggle("open");
//   hamb.classList.toggle("active");
//   body.classList.toggle("noscroll");
//   renderPopup();
// }

// function renderPopup() {
//   popup.appendChild(menu);
//   popup.appendChild(socials);
// }

// const links = Array.from(menu.children);

// links.forEach((link) => {
//   link.addEventListener("click", closeOnClick);
// });

// function closeOnClick() {
//   popup.classList.remove("open");
//   hamb.classList.remove("active");
//   body.classList.remove("noscroll");
// }

(function () {
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".header-nav__menu");
const socialIcons = document.querySelector(".header__social-icons");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
    socialIcons.classList.toggle("active");

})
}) ();