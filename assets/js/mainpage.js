// Scroll
const wallBanner = document.querySelector(".wall-banner");
const container = document.querySelector(".container-scroll-home");
const containerItemFood = document.querySelector(".container-items-food");

const initialTop = 70;
const containerMarginBottom = 68;
const windowWidth = window.innerWidth;
let fixedTop;
function updateFixedTop() {
  const containerItemFoodHeight = containerItemFood.offsetHeight;
  if (windowWidth >= 1200) {
    fixedTop = containerItemFoodHeight - 783;
  } else if (windowWidth >= 905) {
    fixedTop = containerItemFoodHeight - 180;
  } else {
    fixedTop = containerItemFoodHeight - 240;
  }

  window.addEventListener("scroll", () => {
    const containerRect = container.getBoundingClientRect();
    const containerBottom = containerRect.bottom - containerMarginBottom;
    const windowHeight = window.innerHeight;

    if (containerBottom <= windowHeight) {
      wallBanner.style.position = "absolute";
      wallBanner.style.top = fixedTop + "px";
    } else if (containerRect.bottom - containerMarginBottom > windowHeight) {
      wallBanner.style.position = "fixed";
      wallBanner.style.top = initialTop + "px";
    }
  });
}
updateFixedTop();

// LOAD MORE LIST ITEM
const loadMoreButtons = document.querySelectorAll(
  ".load-more, .load-more-2, .load-more-3"
);

const createItemFood1 = () => {
  const itemFood = document.createElement("div");
  itemFood.classList.add("item-food");

  itemFood.innerHTML = `
    <a href="restaurant.html" target="blank">
      <div class="img-food">
        <img src="https://down-bs-vn.img.susercontent.com/vn-11134513-7r98o-lsu99wx8nah054@resize_ss640x400!@crop_w640_h400_cT" alt="">
        <div class="tag-like">
          <p><i class="fa fa-thumbs-up"></i> Yêu thích</p>
        </div>
      </div>
      <div class="infor-item">
        <h4>Chè Ngon Phố - Cổ Nhuế</h4>
        <p class="addr-item">136 Ngõ 43 Cổ Nhuế, P. Cổ Nhuế 2, Bắc Từ Liêm, Hà Nội</p>
        <p class="item-promotion"><i class="ti-shopping-cart-full"></i> Giảm món</p>
      </div>
      <p class="opentime-status"></p>
    </a>
  `;

  return itemFood;
};

const createItemFood2 = () => {
  const itemFood = document.createElement("div");
  itemFood.classList.add("item-food");

  itemFood.innerHTML = `
    <a href="restaurant.html" target="_blank">
      <div class="img-food">
        <img src="https://down-bs-vn.img.susercontent.com/vn-11134512-7r98o-lwdzypq1rm57e1@resize_ss320x320!@crop_w320_h320_cT" alt="">
        <div class="tag-like">
          <p><i class="fa fa-thumbs-up"></i> Yêu thích</p>
        </div>
      </div>
      <div class="infor-item">
        <h4>ShopeeFood x MONO khao trà sữa 0Đ</h4>
        <p>200 địa điểm</p>
      </div>
    </a>
  `;

  return itemFood;
};

const createItemFood3 = () => {
  const itemFood = document.createElement("div");
  itemFood.classList.add("item-food");

  itemFood.innerHTML = `
    <a href="restaurant.html" target="_blank">
      <div class="img-food">
        <img src="https://down-bs-vn.img.susercontent.com/vn-11134513-7r98o-lsu6z4tnntms64@resize_ss280x175!@crop_w280_h175_cT" alt="">
      </div>
      <div class="infor-item">
        <div class="title"><span><img src="./assets/img/partner2x.png" alt=""></span>The 1989 - Trà Sữa Muối Biển</div>
        <div class="place">5 địa điểm</div>
        <div class="price"><i class="ti-check-box"></i> Tối thiểu 20K <i class="ti-money"></i>Giá 21K</div>
        <div class="item-promotion"><i class="ti-shopping-cart-full"></i> TECHCOMBANK giảm 80K</div>
      </div>
      <p class="opentime-status"></p>
    </a>
  `;

  return itemFood;
};

loadMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const areaItems = button.closest(".area-items");
    const itemFoodContainer = areaItems.querySelector(".items-restaurant");
    let createItemFood;

    if (areaItems.classList.contains("collection")) {
      createItemFood = createItemFood2;
    } else if (areaItems.classList.contains("diverse")) {
      createItemFood = createItemFood3;
      wallBanner.style.position = "fixed";
      wallBanner.style.top = initialTop + "px";
    } else {
      createItemFood = createItemFood1;
    }
    for (let i = 0; i < 6; i++) {
      const newItemFood = createItemFood();
      itemFoodContainer.appendChild(newItemFood);
    }

    updateFixedTop();
  });
});

// FOOD LIST
document.addEventListener("DOMContentLoaded", () => {
  const categories = {
    food: [
      { href: "restaurant-list.html", text: "All" },
      { href: "restaurant-list.html", text: "Đồ ăn" },
      { href: "restaurant-list.html", text: "Đồ uống" },
      { href: "restaurant-list.html", text: "Đồ chay" },
      { href: "restaurant-list.html", text: "Bánh kem" },
      { href: "restaurant-list.html", text: "Tráng miệng" },
      { href: "restaurant-list.html", text: "Homemade" },
      { href: "restaurant-list.html", text: "Vỉa hè" },
      { href: "restaurant-list.html", text: "Pizza/Burger" },
      { href: "restaurant-list.html", text: "Món gà" },
      { href: "restaurant-list.html", text: "Món lẩu" },
      { href: "restaurant-list.html", text: "Sushi" },
      { href: "restaurant-list.html", text: "Mì phở" },
      { href: "restaurant-list.html", text: "Cơm hộp" },
    ],
    grocery: [
      { href: "restaurant-list.html", text: "All" },
      { href: "restaurant-list.html", text: "Đồ chay" },
      { href: "restaurant-list.html", text: "Trái cây" },
      { href: "restaurant-list.html", text: "Thịt/Trứng" },
      { href: "restaurant-list.html", text: "Thủy hải sản" },
      { href: "restaurant-list.html", text: "Gia vị" },
      { href: "restaurant-list.html", text: "Rau củ" },
      { href: "restaurant-list.html", text: "Gạo mì" },
      { href: "restaurant-list.html", text: "Gia vị" },
    ],
    alcohol: [
      { href: "restaurant-list.html", text: "All" },
      { href: "restaurant-list.html", text: "Rượu vang" },
      { href: "restaurant-list.html", text: "Bia" },
      { href: "restaurant-list.html", text: "Cocktail" },
      { href: "restaurant-list.html", text: "Rượu mạnh" },
    ],
    flowers: [
      { href: "restaurant-list.html", text: "All" },
      { href: "restaurant-list.html", text: "Chúc mừng" },
      { href: "restaurant-list.html", text: "Chia buồn" },
      { href: "restaurant-list.html", text: "Cây cảnh" },
      { href: "restaurant-list.html", text: "Hoa héo" },
    ],
    supermarket: [
      { href: "restaurant-list.html", text: "All" },
      { href: "restaurant-list.html", text: "Mỹ phẩm" },
      { href: "restaurant-list.html", text: "Mẹ & Bé" },
      { href: "restaurant-list.html", text: "Đồ chơi" },
      { href: "restaurant-list.html", text: "Đồ chơi" },
      { href: "restaurant-list.html", text: "Quần áo / Giày dép" },
      { href: "restaurant-list.html", text: "Điện tử/ Điện gia dụng" },
    ],
    medicine: [
      { href: "restaurant-list.html", text: "All" },
      { href: "restaurant-list.html", text: "Thuốc cảm" },
      { href: "restaurant-list.html", text: "Thuốc đau đầu" },
      { href: "restaurant-list.html", text: "Vitamin" },
    ],
    pets: [
      { href: "restaurant-list.html", text: "All" },
      { href: "restaurant-list.html", text: "Thức ăn cho chó" },
      { href: "restaurant-list.html", text: "Thức ăn cho mèo" },
      { href: "restaurant-list.html", text: "Phụ kiện cho thú cưng" },
    ],
  };

  const categoryList = document.getElementById("category-list");
  let isUpdating = false;

  const updateCategoryList = (category) => {
    if (isUpdating) return; // Nếu đang cập nhật, không thực hiện thêm
    isUpdating = true;

    // Clear current list
    categoryList.innerHTML = "";

    setTimeout(() => {
      // Giả lập thời gian trễ khi tải dữ liệu
      categories[category].forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        categoryList.appendChild(li);
      });
      isUpdating = false; // Kết thúc quá trình cập nhật
    }, 200); // Thời gian trễ giả lập
  };

  document.querySelectorAll(".nav a").forEach((navItem) => {
    navItem.addEventListener("click", (event) => {
      event.preventDefault();
      const category = event.target.getAttribute("data-category");
      if (categories[category]) {
        updateCategoryList(category);
      }
    });
  });

  // Initialize with the default category
  updateCategoryList("food");
});
// Back to top page
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
