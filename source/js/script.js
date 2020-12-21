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

// var form = document.querySelector(".form");
// var modalError = document.querySelector(".modal--error");
// var modalSuccess = document.querySelector(".modal--success");
// var modalCloseBtn;

// if (form) {
//   form.addEventListener("invalid", function () {
//     modalError.classList.add("modal--show");

//     modalCloseBtn = modalError.querySelector(".modal__close");
//     modalCloseBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       modalError.classList.remove("modal--show");
//     });

//     window.addEventListener("keydown", function (e) {
//       if (e.key === "Escape") {
//         e.preventDefault();
//         modalError.classList.remove("modal--show");
//       }
//     });
//   }, true);

//   form.addEventListener("submit", function () {
//     modalSuccess.classList.add("modal--show");

//     modalCloseBtn = modalSuccess.querySelector(".modal__close");
//     modalCloseBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       modalSuccess.classList.remove("modal--show");
//     });

//     window.addEventListener("keydown", function (e) {
//       if (e.key === "Escape") {
//         e.preventDefault();
//         modalSuccess.classList.remove("modal--show");
//       }
//     });
//   });
// }
