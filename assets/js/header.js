// <Nav
const subnav = document.querySelectorAll(".li");
for (const item of subnav) {
  item.addEventListener("click", function () {
    setTimeout(() => {
      subnav.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    }, 400);
  });
}

// DropDown
const selectPlace = document.querySelector(".select-place");
const dropdownMenu = document.querySelector(".dropdown-menu");
const placeItems = document.querySelectorAll(".place-items");
const city = document.querySelector(".city");
selectPlace.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

placeItems.forEach((item) => {
  item.addEventListener("click", function () {
    const cityName = item.querySelector("p").textContent;
    selectPlace.innerHTML = cityName + '<i class="ti-angle-down"></i>';
    city.textContent = cityName;
    dropdownMenu.classList.remove("show");
  });
});

window.addEventListener("click", function (event) {
  if (
    !selectPlace.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove("show");
  }
});
