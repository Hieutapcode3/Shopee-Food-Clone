// CHECK ROBOT
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".type-checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        checkboxes.forEach((cb) => {
          if (cb !== this) cb.checked = false;
        });
      }
    });
  });
});
// SHOW QUESTION
$(document).ready(function () {
  $(".card-header").click(function () {
    $(".card-header")
      .not(this)
      .removeClass("active")
      .next(".des-card")
      .slideUp(250);
    $(this).toggleClass("active").next(".des-card").slideToggle(250);
  });
});

// scroll-smooth
$(document).ready(function () {
  $(".nav a").click(function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    var targetId = $(this).attr("href"); // Lấy giá trị của thuộc tính href
    var targetPosition = $(targetId).offset().top; // Lấy vị trí của phần tử có id tương ứng

    $("html, body").animate({ scrollTop: targetPosition }, 900, "linear"); // Trượt xuống phần tử trong 1000 milliseconds
  });

  $(".app-driver").click(function () {
    var targetPosition = $(".banner-dow-app").offset().top; // Lấy vị trí của phần tử có id "app"

    $("html, body").animate({ scrollTop: targetPosition }, 900, "linear"); // Trượt xuống phần tử với tốc độ linear
  });
});
document.getElementById("back-top-page").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", function () {
  const topControl = document.querySelector(".top-control");
  if (window.scrollY > 200) {
    topControl.classList.add("active");
  } else if (window.scrollY < window.innerHeight - 200) {
    topControl.classList.remove("active");
  }
});
