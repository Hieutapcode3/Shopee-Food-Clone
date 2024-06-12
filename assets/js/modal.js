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

// Modal-search
const search_products = document.querySelector(".js-search");
const modal_search = document.querySelector(".modal.search");
const modal_search_container = document.querySelector(
  ".modal-search-container"
);
const modal_content = document.querySelector(".modal-content");
const close_search = document.querySelector(".js-modal-search-close");

function hideAreaSearch() {
  modal_search_container.classList.add("modal-fadeOut");
}

function showAreaSearch() {
  modal_search.classList.add("open");
  modal_search_container.classList.remove("modal-fadeOut");
}

search_products.addEventListener("click", showAreaSearch);
close_search.addEventListener("click", hideAreaSearch);

document.addEventListener("click", (event) => {
  if (
    !modal_content.contains(event.target) &&
    !search_products.contains(event.target)
  ) {
    hideAreaSearch();
  }
});

modal_search_container.addEventListener("animationend", () => {
  if (modal_search_container.classList.contains("modal-fadeOut")) {
    modal_search.classList.remove("open");
    modal_search_container.classList.remove("modal-fadeOut");
  }
});
