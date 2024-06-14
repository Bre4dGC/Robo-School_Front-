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

// $(document).ready(function () {
//   $(".slider").slick();
// });
