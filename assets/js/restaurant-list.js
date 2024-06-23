document.addEventListener("DOMContentLoaded", () => {
  const district = document.getElementById("District");
  const category = document.getElementById("Category");
  const contentBoxes = document.querySelectorAll(".content-box");
  const itemFilters = document.querySelectorAll(".item-filter");
  const customCheckboxes = document.querySelectorAll(
    ".custom-checkbox input[type='checkbox']"
  );
  const deleteTags = document.querySelectorAll(".delete-tag");

  // Hàm ẩn tất cả các dropdown
  function hideAllDropdowns() {
    contentBoxes.forEach((box) => box.classList.remove("show"));
    itemFilters.forEach((filter) => filter.classList.remove("show"));
  }

  function toggleDropdown(index) {
    hideAllDropdowns();
    contentBoxes[index].classList.toggle("show");
    itemFilters[index].classList.toggle("show");
  }

  district.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown(0);
  });

  category.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown(1);
  });

  document.addEventListener("click", hideAllDropdowns);

  contentBoxes.forEach((box) =>
    box.addEventListener("click", (event) => event.stopPropagation())
  );
  itemFilters.forEach((filter) =>
    filter.addEventListener("click", (event) => event.stopPropagation())
  );
  customCheckboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", (event) => event.stopPropagation())
  );

  customCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", updateUnderItems);
  });

  deleteTags.forEach((deleteTag) => {
    deleteTag.addEventListener("click", function () {
      const underItem = this.closest(".under-item");
      underItem.classList.remove("show"); // Chỉ ẩn underItem
    });
  });

  function updateUnderItems() {
    const districtUnderItem = document.querySelector(".under-item:first-child");
    const categoryUnderItem = document.querySelector(".under-item:last-child");

    const districtCheckedCount = itemFilters[0].querySelectorAll(
      ".custom-checkbox input[type='checkbox']:checked"
    ).length;
    const categoryCheckedCount = itemFilters[1].querySelectorAll(
      ".custom-checkbox input[type='checkbox']:checked"
    ).length;

    districtUnderItem.classList.toggle("show", districtCheckedCount > 0);
    districtUnderItem.querySelector(
      ".count"
    ).textContent = `(${districtCheckedCount})`;

    categoryUnderItem.classList.toggle("show", categoryCheckedCount > 0);
    categoryUnderItem.querySelector(
      ".count"
    ).textContent = `(${categoryCheckedCount})`;
  }

  updateUnderItems();
});

document.addEventListener("DOMContentLoaded", function () {
  const paginationItems = document.querySelectorAll(".pagination li");

  paginationItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      if (index === 0 || index === paginationItems.length - 1) {
        return;
      }

      paginationItems.forEach((p) => p.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

// top-control
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
