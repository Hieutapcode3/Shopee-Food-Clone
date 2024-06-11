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
