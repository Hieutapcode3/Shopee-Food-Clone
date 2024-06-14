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

const inputSearch = document.querySelector(".js-input-search");
const searchResult = document.querySelector(".search-result");
const keyWord = document.querySelector(".key-word");
const loadingSpinner = document.querySelector(".loading-spinner");

inputSearch.addEventListener("input", () => {
  const value = inputSearch.value.trim();
  if (value === "") {
    searchResult.style.display = "none";
    loadingSpinner.style.display = "none";
  } else {
    searchResult.style.display = "none";
    loadingSpinner.style.display = "block";
    keyWord.textContent = value;

    setTimeout(() => {
      loadingSpinner.style.display = "none";
      searchResult.style.display = "block";
    }, 1000);
  }
});
