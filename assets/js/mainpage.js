// Modal
const get_place = document.querySelector(".js-get-place");
const modal = document.querySelector(".modal");
const modal_container = document.querySelector(".modal-container");
const close = document.querySelector(".js-modal-close");
function hideGetPlace() {
  modal_container.classList.add("modal-fadeOut");
}
function showGetPlace() {
  modal.classList.add("open");
  modal_container.classList.remove("modal-fadeOut");
}
get_place.addEventListener("click", showGetPlace);
close.addEventListener("click", hideGetPlace);
modal_container.addEventListener("animationend", () => {
  if (modal_container.classList.contains("modal-fadeOut")) {
    modal.classList.remove("open");
    modal_container.classList.remove("modal-fadeOut");
  }
});

// <Nav
const subnav = document.querySelectorAll(".li");
for (const item of subnav) {
  item.addEventListener("click", function () {
    subnav.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
}

// DropDown
const showdropdown = document.querySelector(".dropdown-menu");
const selectPlace = document.querySelector(".select-place");
function show() {
  showdropdown.classList.toggle("show");
}
function handleClickOutside(event) {
  if (
    !showdropdown.contains(event.target) &&
    !selectPlace.contains(event.target)
  ) {
    showdropdown.classList.remove("show");
  }
}
selectPlace.addEventListener("click", show);
document.addEventListener("click", handleClickOutside);

// Scroll
const wallBanner = document.querySelector(".wall-banner");
const container = document.querySelector(".container-scroll-home");

const initialTop = 70;
const fixedTop = 1650;
const containerMarginBottom = 68;

window.addEventListener("scroll", () => {
  const containerRect = container.getBoundingClientRect();
  const containerBottom = containerRect.bottom - containerMarginBottom;
  const windowHeight = window.innerHeight;
  if (containerBottom <= windowHeight) {
    wallBanner.style.position = "absolute";
    wallBanner.style.top = fixedTop + "px";
  } else if (containerRect.bottom + containerMarginBottom > windowHeight) {
    console.log("jump");
    wallBanner.style.position = "fixed";
    wallBanner.style.top = initialTop + "px";
  }
});
