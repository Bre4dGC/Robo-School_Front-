document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");

  // Показать/скрыть кнопку при прокрутке страницы
  window.addEventListener("scroll", function () {
    if (window.scrollY > 800) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
});

var swiper = new Swiper("slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
