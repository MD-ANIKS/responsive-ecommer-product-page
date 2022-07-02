// DOM Element

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const navLinks = document.querySelector("nav");
  const closeBtn = document.querySelector(".menu-close");

  navLinks.classList.add("open");
  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
}); // this parenthesis for hamburger click event

const cartContainer = document.querySelector(".cart-container");
const cartBtn = document.querySelector(".icon-cart");
const delBtn = document.querySelector(".del-btn");
// const checkoutBtn = document.querySelector('.checkout-btn');

delInt();

cartBtn.addEventListener("click", (e) => {
  cartContainer.classList.toggle(".active");

  const cartValue = document.querySelector(".cart-value");

  if (cartValue) {
    valueCount = quantity.value;
    cartValue.innerText = valueCount;
  }
});

// selector
const mainImage = document.querySelector(".main-image img");
const smallImages = document.querySelectorAll(".small-image img");
const modal = document.querySelector(".modal-area");

smallImages.forEach((item) => {
  const arrowItems = document.querySelector("#product .arrow");

  if ((arrowItems.style.display = "block")) {
    // selector
    const smallImages = document.querySelectorAll(".bottom-content img");

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let current = 0;

    // reset function
    function reset() {
      for (let i = 0; i < smallImages.length; i++) {
        mainImage.setAttribute("src", "");
      }
    }

    // start slide
    function startSlide() {
      reset();
      mainImage.src = smallImages[0].src;
    }

    // show prev
    function slideLeft() {
      reset();
      mainImage.src = smallImages[current - 1].src;
      current--;
    }

    // show next
    function slideRight() {
      reset();
      mainImage.src = smallImages[current + 1].src;
      current++;
    }

    // left arrow click
    prevBtn.addEventListener("click", function () {
      if (current === 0) {
        current = smallImages.length;
      }
      slideLeft();
    });

    nextBtn.addEventListener("click", function () {
      if (current === smallImages.length - 1) {
        current = -1;
      }
      slideRight();
    });

    startSlide();
  } // this curly braces for if condition

  item.addEventListener("click", (e) => {
    mainImage.src = item.src;

    if (document.querySelector(".small-image img.active") !== null) {
      document
        .querySelector(".small-image img.active")
        .classList.remove("active");
    }

    e.target.className = "active";
  });
});

// cart btn click event
const quantity = document.querySelector(".cart-num");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const price = document.querySelector(".price").innerText;

let valueCount;

function totalPrice(e) {
  const total = Math.ceil(price * valueCount);
  document.querySelector(".price").innerText = total;

  if (document.querySelector(".price-total")) {
    document.querySelector(".price-total").innerText = total;
  }
}

plusBtn.addEventListener("click", () => {
  valueCount = quantity.value;
  valueCount++;

  quantity.value = valueCount;
  totalPrice();
});

minusBtn.addEventListener("click", () => {
  if (quantity.value > 1) {
    valueCount = quantity.value;
    valueCount--;

    quantity.value = valueCount;
    totalPrice();
  }
});

// add to cart
const addBtn = document.querySelector(".cart-btn");

delBtn.addEventListener("click", () => {
  delInt();
});

addBtn.addEventListener("click", () => {
  const cartInfo = document.querySelector(".cart-info");

  cartInfo.innerHTML = `
  
  <img src="./images/image-product-1-thumbnail.jpg" class="cart-img" alt="">
  <div class="cart-meta">
    <p>fall limited edition sneakers</p>
    <div class="cart-total">
      <span>$125.00 *</span>
      <span class="cart-value">3</span> 
      <strong>$<span class="price-total">375</span>.00</strong>
    </div>
  </div>
  <img src="./images/icon-delete.svg" class="del-btn" alt="">
  
  `;

  document.querySelector(".del-btn").addEventListener("click", () => {
    cartInfo.innerHTML = `<p class="empty-cart" > Your cart is empty </p>`;
    document.querySelector("p.empty-cart").style.marginTop = "35px";
    document.querySelector("p.empty-cart").style.padding = "0px 35px";
    document.querySelector(".checkout-btn").style.visibility = "hidden";
  });

  document.querySelector(".checkout-btn").style.visibility = "visible";

  cartContainer.classList.add(".active");

  const cartValue = document.querySelector(".cart-value");

  valueCount = quantity.value;
  cartValue.innerText = valueCount;
  totalPrice();
});

function delInt() {
  const cartInfo = document.querySelector(".cart-info");

  cartInfo.innerHTML = `
  <div class="cart-meta">
    <p class="empty-cart" >Your cart is empty</p>
  </div>
  `;

  document.querySelector(".checkout-btn").style.visibility = "hidden";
  document.querySelector("p.empty-cart").style.marginTop = "35px";
  document.querySelector("p.empty-cart").style.padding = "0px 35px";
}

const products = document.querySelector("#product");

products.addEventListener("click", (e) => {
  if (
    cartContainer.classList.contains(".active") &&
    e.target !== addBtn &&
    e.target !== cartBtn
  ) {
    cartContainer.classList.remove(".active");
  }
});

// modal click event listener

mainImage.addEventListener("click", () => {
  const closeBtn = document.querySelector(".close-btn");

  if (!modal.classList.contains("open")) {
    modal.classList.add("open");

    // selector
    const smallImages = document.querySelectorAll(".bottom-content img");
    const modalImg = document.querySelector(".top-content img");

    const leftBtn = document.querySelector(".left-arrow");
    const rightBtn = document.querySelector(".right-arrow");

    let current = 0;

    // reset function
    function reset() {
      for (let i = 0; i < smallImages.length; i++) {
        modalImg.setAttribute("src", "");
        if (document.querySelector(".bottom-content img.active") !== null) {
          document
            .querySelector(".bottom-content img.active")
            .classList.remove("active");
        }
      }
    }

    // start slide
    function startSlide() {
      reset();
      modalImg.src = smallImages[0].src;
      smallImages[0].classList.add("active");
    }

    // show prev
    function slideLeft() {
      reset();
      modalImg.src = smallImages[current - 1].src;
      smallImages[current - 1].classList.add("active");
      current--;
    }

    // show next
    function slideRight() {
      reset();
      modalImg.src = smallImages[current + 1].src;
      smallImages[current + 1].classList.add("active");
      current++;
    }

    // left arrow click
    leftBtn.addEventListener("click", function () {
      if (current === 0) {
        current = smallImages.length;
      }
      slideLeft();
    });

    rightBtn.addEventListener("click", function () {
      if (current === smallImages.length - 1) {
        current = -1;
      }
      slideRight();
    });

    startSlide();

    // each item for smallImages

    smallImages.forEach((item) => {
      item.addEventListener("click", (e) => {
        modalImg.src = item.src;

        if (document.querySelector(".bottom-content img.active") !== null) {
          document
            .querySelector(".bottom-content img.active")
            .classList.remove("active");
        }

        e.target.className = "active";
      });
    }); // each img for small images
  }

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  }); // this parenthesis for modal close event listener
});
