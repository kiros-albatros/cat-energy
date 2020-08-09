//mobile menu

let burger = document.querySelector(".burger");
let mobileMenu = document.querySelector(".mobile-menu");
let lineTop = document.querySelector(".line-top");
let lineMiddle = document.querySelector(".line-middle");
let lineBottom = document.querySelector(".line-bottom");
burger.addEventListener("click", function () {
  mobileMenu.classList.toggle("show-mobile-menu");
  lineTop.classList.toggle("line-top-close");
  lineMiddle.classList.toggle("line-middle-close");
  lineBottom.classList.toggle("line-bottom-close");
});

// fat-slim mobile



let scaleContainer = document.querySelector(".scale-container");
let scale = document.querySelector(".example__scale");
let fatExample = document.querySelector(".fat-example");
let slimExample = document.querySelector(".slim-example");
scaleContainer.addEventListener("click", function () {
  scale.classList.toggle("example__scale-click");
  fatExample.classList.toggle("fat-example-hide");
  slimExample.classList.toggle("slim-example-show");
});

// fat-slim tablet and desktop

let bigScale = document.querySelector("#myRange");
bigScale.addEventListener("click", function () {
  if (bigScale.value > 50) {
    fatExample.style.display = "none";
    slimExample.style.display = "block";
    slimExample.style.zindex = 5;
    slimExample.style.paddingRight = "665px";
  } else if (bigScale.value < 50) {
    fatExample.style.display = "block";
    slimExample.style.display = "none";
    fatExample.style.paddingLeft = "665px";
  } else {
    fatExample.style.display = "block";
    slimExample.style.display = "block";
    slimExample.style.zindex = 3;
    fatExample.style.zindex = 4;
    slimExample.style.paddingRight = "315px";
    fatExample.style.paddingLeft = "350px";
  }
});