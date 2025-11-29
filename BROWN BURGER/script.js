const buttonMenuClose = document.getElementById("button-menu-close");
const buttonMenuOpen = document.getElementById("button-menu-open");

buttonMenuOpen.addEventListener("click", () => {
    document.body.classList.add("show-mobile-navbar");
});

buttonMenuClose.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-navbar");
});

const swiper = new Swiper('.slider-wrapper', {

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});