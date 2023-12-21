const user_icon = document.querySelector(".nav-user-icon");
const setting_menu = document.querySelector(".settings-menu");
setting_menu.style.display = "none";

user_icon.addEventListener("click", function () {
  setting_menu.style.display =
    setting_menu.style.display === "none" ? "block" : "none";
});

//dark button
const darkBtn = document.getElementById("dark-btn");
const body = document.getElementById("body");
const navbar = document.getElementById("navbar");
const footer = document.getElementById("footer");
const bgWhite = document.querySelectorAll(".bg-white");
const textBlack = document.querySelectorAll(".text-black");
const bgBlue = document.querySelectorAll(".bg-blue-600");

function toggleClass() {
  darkBtn.classList.toggle("dark-btn-on");
  body.classList.toggle("bg-slate-800");
  bgWhite.forEach(function (element) {
    element.classList.toggle("bg-white");
    element.classList.toggle("bg-slate-900");
  });
  textBlack.forEach(function (element) {
    element.classList.toggle("text-black");
    element.classList.toggle("text-slate-50");
  });
  bgBlue.forEach(function (element) {
    element.classList.toggle("bg-blue-600");
    element.classList.toggle("bg-slate-700");
  });
  navbar.classList.toggle("bg-slate-900");
  footer.classList.toggle("bg-slate-900");
}

darkBtn.addEventListener("click", toggleClass);
