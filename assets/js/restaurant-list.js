// import data from "./data.json" with {type: "json"};



// const renderFood = () => {
//     const item_restaurant = document.getElementById("item");
//     const ten_mon = document.createElement("div");
//     ten_mon.innerHTML = "";
//     data.forEach(page => {
//         if(page.page == 1){
//             page.mon_an.forEach(name_mon =>{
                
//                 // if(name_mon == "bún bò"){
//                 //     ten_mon.innerHTML =
//                 //     `<div><h1>${name_mon.name}</h1></div>`;
//                 //     item_restaurant.appendChild(ten_mon);
//                 // } else {
//                 //     ten_mon.innerHTML =
//                 //     `<div><h1>${name_mon.name}</h1></div>`;
//                 //     item_restaurant.appendChild(ten_mon);
//                 // }
//             })
//         }

//     })
// }
// renderFood();

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


document.addEventListener("DOMContentLoaded", function() {
    var customCheckboxes = document.querySelectorAll(".custom-checkbox input[type='checkbox']");

    customCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener("click", function(event) {
            updateUnderItems();
            event.stopPropagation(); // Ngăn chặn sự kiện click lan rộng ra khỏi custom-checkbox
        });
    });

    var deleteTags = document.querySelectorAll(".delete-tag");
    deleteTags.forEach(function(deleteTag) {
        deleteTag.addEventListener("click", function(event) {
            var underItem = deleteTag.closest(".under-item");
            var checkboxes = underItem.querySelectorAll(".custom-checkbox input[type='checkbox']");

            checkboxes.forEach(function(checkbox) {
                checkbox.checked = false;
            });

            underItem.classList.remove("show");
        });
    });
});

function updateUnderItems() {
    var itemFilters = document.querySelectorAll(".item-filter");

    itemFilters.forEach(function(itemFilter) {
        var underItem;
        var countElement;

        if (itemFilter.querySelector(".dropdown-toggle").id === "District") {
            underItem = document.querySelector(".under-item:first-child");
            countElement = underItem.querySelector(".count");
        } else if (itemFilter.querySelector(".dropdown-toggle").id === "Category") {
            underItem = document.querySelector(".under-item:last-child");
            countElement = underItem.querySelector(".count");
        }

        var checkboxesInFilter = itemFilter.querySelectorAll(".custom-checkbox input[type='checkbox']");
        var checkedCheckboxes = Array.from(checkboxesInFilter).filter(cb => cb.checked);
        var checkedCount = checkedCheckboxes.length;

        if (checkedCount > 0) {
            underItem.classList.add("show");
        } else {
            underItem.classList.remove("show");
        }

        countElement.textContent = `(${checkedCount})`;
    });
}

  
document.addEventListener("click", function(event) {
    var sortElement = document.querySelector(".sort");
    if (event.target.classList.contains("sort")) {
        event.target.classList.add("large");
    } else {
        sortElement.classList.remove("large");
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const paginationItems = document.querySelectorAll('.pagination li');

    paginationItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Do not add 'active' class to the first and last elements
            if (index === 0 || index === paginationItems.length - 1) {
                return;
            }
            
            // Remove 'active' class from all items
            paginationItems.forEach(p => p.classList.remove('active'));
            // Add 'active' class to the clicked item
            item.classList.add('active');
        });
    });
});



// const renderNumPage = () => {
//     const num_page = [1, 2, 3, 4, 5, 6, 7, 8];
//     const page = document.getElementById("page");
//     // Clear previous content
//     page.innerHTML = "";

//     num_page.forEach((num, i) => {
//         const li = document.createElement("li");
//         li.innerHTML = `<a href="#">${num}</a>`;
//         page.appendChild(li);
//         console.log(`Số ${num} ở vị trí ${i}`);

//         li.addEventListener("click", () => {
//             // Remove selected class from all list items
//             const allLi = page.querySelectorAll("li");
//             allLi.forEach(item => {
//                 item.classList.remove("active");
//             });

//             // Apply selected class to the clicked item
//             li.classList.add("active");

//             let trang = [];
//             trang.push(num);
//             console.log(trang);
//         });
//     });
// };

// renderNumPage();







