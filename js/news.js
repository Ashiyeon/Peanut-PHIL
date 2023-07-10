// ░░░▐▀▀▄█▀▀▀▀▀▒▄▒▀▌░░░░熊
// ░░░▐▒█▀▒▒▒▒▒▒▒▒▀█░░░░░怪
// ░░░░█▒▒▒▒▒▒▒▒▒▒▒▀▌░░░░保
// ░░░░▌▒██▒▒▒▒██▒▒▒▐░░░░佑
// ░░░░▌▒▒▄▒██▒▄▄▒▒▒▐░░░░，
// ░░░▐▒▒▒▀▄█▀█▄▀▒▒▒▒█▄░░拜
// ░░░▀█▄▒▒▐▐▄▌▌▒▒▄▐▄▐░░░託
// ░░▄▀▒▒▄▒▒▀▀▀▒▒▒▒▀▒▀▄░░不
// ░░█▒▀█▀▌▒▒▒▒▒▄▄▄▐▒▒▐░░要
// ░░░▀▄▄▌▌▒▒▒▒▐▒▒▒▀▒▒▐░░有
// ░░░░░░░▐▌▒▒▒▒▀▄▄▄▄▄▀░░B
// ░░░░░░░░▐▄▒▒▒▒▒▒▒▒▐░░░U
// ░░░░░░░░▌▒▒▒▒▄▄▒▒▒▐░░░G

//新聞輪播

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    // centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
