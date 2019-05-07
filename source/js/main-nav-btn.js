var mainNavBtn = document.querySelector(".main-navigation__toggle");
var mainNavMenu = document.querySelector(".main-navigation__list");
mainNavBtn.addEventListener("click",
  function (evt) {
  evt.preventDefault();
  mainNavBtn.classList.toggle("main-navigation__toggle--open");
  mainNavMenu.classList.toggle("list-show");
  }
);
