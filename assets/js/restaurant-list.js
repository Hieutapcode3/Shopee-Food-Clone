document.addEventListener("DOMContentLoaded", function() {
    var district = document.getElementById("District");
    var category = document.getElementById("Category");
    var contentBox = document.querySelectorAll(".content-box");
    var itemFilter = document.querySelectorAll(".item-filter");

    function hideAllDropdowns() {
        contentBox.forEach(function(box) {
            box.classList.remove("show");
        });
        itemFilter.forEach(function(filter) {
            filter.classList.remove("show");
        });
    }

    district.addEventListener("click", function(event) {
        event.stopPropagation();
        hideAllDropdowns(); // Ẩn tất cả các dropdown trước khi hiển thị dropdown của "Khu vực"
        contentBox[0].classList.toggle("show"); // Toggle class "show" cho content box thứ nhất
        itemFilter[0].classList.toggle("show"); // Toggle class "show" cho item filter thứ nhất
    });

    category.addEventListener("click", function(event) {
        event.stopPropagation();
        hideAllDropdowns(); // Ẩn tất cả các dropdown trước khi hiển thị dropdown của "Phân loại"
        contentBox[1].classList.toggle("show"); // Toggle class "show" cho content box thứ hai
        itemFilter[1].classList.toggle("show"); // Toggle class "show" cho item filter thứ hai
    });

    document.addEventListener("click", function(event) {
        hideAllDropdowns();
    });

    // Ngăn chặn sự kiện click lan sang các phần tử khác
    contentBox.forEach(function(box) {
        box.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    });

    itemFilter.forEach(function(filter) {
        filter.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    });
});
