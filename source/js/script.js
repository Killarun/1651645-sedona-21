'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');



navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var form = document.querySelector(".reviews-form");
var modalError = document.querySelector(".modal--check");
var modalSuccess = document.querySelector(".modal--done");
var modalCloseBtn;

if (form) {
  form.addEventListener("invalid", function () {
    modalError.classList.remove("modal--close");
    modalError.classList.add("modal--show");

    modalCloseBtn = modalError.querySelector(".modal__button--check");
    modalCloseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalError.classList.remove("modal--show");
      modalError.classList.add("modal--close");
    });

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        e.preventDefault();
        modalError.classList.remove("modal-up--show");
        modalError.classList.add("modal-up--close");
      }
    });
  }, true);

  form.addEventListener("submit", function () {
    modalSuccess.classList.add("modal--show");


    modalCloseBtn = modalSuccess.querySelector(".modal__button--done");
    modalCloseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalSuccess.classList.remove("modal--show");

    });

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        e.preventDefault();
        modalSuccess.classList.remove("modal--show");

      }
    });
  });
}
