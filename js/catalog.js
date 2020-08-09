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

let cardChicken1000 = {
    imageMobile: "img/chicken-big-mobile@1x.jpg",
    imageTablet: "img/chicken-big-tablet@1x.png",
    imageDesktop: "img/chicken-big-desktop@1x.png",
    cardTitle: "Cat Energy Pro 1000 г",
    volume: "1000 г",
    taste: "Курица",
    price: "1000 Р.",
};

let cardFish500 = {
    imageMobile: "img/fish-small-mobile@1x.jpg",
    imageTablet: "img/fish-small-tablet@1x.png",
    imageDesktop: "img/fish-small-desktop@1x.png",
    cardTitle: "Cat Energy Pro 500 г",
    volume: "500 г",
    taste: "Рыба",
    price: "700 Р.",
};

let cardFish1000 = {
    imageMobile: "img/fish-big-mobile@1x.jpg",
    imageTablet: "img/fish-big-tablet@1x.png",
    imageDesktop: "img/fish-big-desktop@1x.png",
    cardTitle: "Cat Energy Pro 1000 г",
    volume: "1000 г",
    taste: "Рыба",
    price: "1000 Р.",
};

let cardBuckwheat500 = {
    imageMobile: "img/buckwheat-small-mobile@1x.jpg",
    imageTablet: "img/buckwheat-small-tablet@1x.png",
    imageDesktop: "img/buckwheat-small-desktop@1x.png",
    cardTitle: "Cat Energy Slim 500 г",
    volume: "500 г",
    taste: "Гречка",
    price: "400 Р.",
};

let cardBuckwheat1000 = {
    imageMobile: "img/buckwheat-big-mobile@1x.jpg",
    imageTablet: "img/buckwheat-big-tablet@1x.png",
    imageDesktop: "img/buckwheat-big-desktop@1x.png",
    cardTitle: "Cat Energy Slim 1000 г",
    volume: "1000 г",
    taste: "Гречка",
    price: "400 Р.",
};

let cardRice500 = {
    imageMobile: "img/rice-small-mobile@1x.jpg",
    imageTablet: "img/rice-small-tablet@1x.png",
    imageDesktop: "img/rice-small-desktop@1x.png",
    cardTitle: "Cat Energy Slim 500 г",
    volume: "500 г",
    taste: "Рис",
    price: "500 Р.",
};

let cardsData = [
    cardChicken1000,
    cardFish500,
    cardFish1000,
    cardBuckwheat500,
    cardBuckwheat1000,
    cardRice500,
];

let catalogContainer = document.querySelector(".catalog__container");
let lastCard = document.querySelector(".card-more");
let allGoods = "";
for (let i = 0; i < cardsData.length; i++) {
    allGoods +=
        '<div class="catalog-card">' +
        '<p class="catalog-card__image-container">' +
        '<picture>' +
        '<source srcset="' + cardsData[i].imageMobile + '" media="(max-width: 450px)" />' +
        '<source srcset="' + cardsData[i].imageTablet + '" media="(max-width: 1000px)" />' +
        '<source srcset="' + cardsData[i].imageDesktop + '" media="(max-width: 2000px)" />' +
        '<img src="' + cardsData[i].imageMobile + '" alt="">' +
        '</picture>' +
        '</p>' +
        '<div class="catalog-card__text">' +
        '<h4 class="catalog-card__title">' + cardsData[i].cardTitle + '</h4>' +
        '<p class="catalog-card__line">' +
        '<span class="card__parameter">Объём</span>' +
        '<span class="card__contents">' + cardsData[i].volume + '</span>' +
        '</p>' +
        '<p class="catalog-card__line">' +
        '<span class="card__parameter">Вкус</span>' +
        '<span class="card__contents">' + cardsData[i].taste + '</span>' +
        '</p>' +
        '<p class="catalog-card__line">' +
        '<span class="card__parameter">Цена</span>' +
        '<span class="card__contents">' + cardsData[i].price + '</span>' +
        '</p>' +
        '</div>' +
        '<button class="button catalog__button">ЗАКАЗАТЬ</button>' +
        '</div>';
}

lastCard.insertAdjacentHTML('beforebegin', allGoods);

/*let catalogCard =
  ' <div class="catalog-card">' +
  '<p class="catalog-card__image-container">' +
  '<picture class="promo__image">' +
  '<source srcset="img/rice-small-mobile@1x.jpg" media="(max-width: 450px)" />' +
  '<source srcset="img/chicken-small-tablet.jpg" width="700"' +
  'media="(max-width: 1000px)" />' +
  '<source srcset="img/chicken-small-desktop@1x.png" media="(max-width: 2000px)" />' +
  '<img src="img/chicken-small-mobile@1x.jpg" alt="">' +
  "</picture>" +
  "</p>" +
  '<div class="catalog-card__text">' +
  '<h4 class="catalog-card__title">' +
  cardFish500.cardTitle +
  "</h4>" +
  '<p class="catalog-card__line">' +
  '<span class="card__parameter">Объём</span>' +
  '<span class="card__contents">500 г</span>' +
  "</p>" +
  '<p class="catalog-card__line">' +
  '<span class="card__parameter">Вкус</span>' +
  '<span class="card__contents">Курица</span>' +
  "</p>" +
  '<p class="catalog-card__line">' +
  '<span class="card__parameter">Цена</span>' +
  '<span class="card__contents">700 р.</span>' +
  "</p>" +
  "</div>" +
  '<button class="button catalog__button">ЗАКАЗАТЬ</button>' +
  "</div> ";

catalogContainer.innerHTML += catalogCard;*/