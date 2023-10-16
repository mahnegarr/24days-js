import { menuItems } from "./app.js";
const panel = document.querySelector(".panel");
const panelCart = document.getElementById("panel-cart");
const quantityWrapper = document.querySelectorAll(".quantity__wrapper");

let clickedItems = [];

function addItem(items) {
  let ul;
  items.forEach((item) => {
    ul = document.createElement("ul");
    ul.classList.add("menu");
    ul.innerHTML = `
        <li>
            <div class="plate">
                <img src=${item.image} alt=${item.alt} class="plate" />
            </div>
            <div class="content">
                <p class="menu-item">${item.name}</p>
                <p class="price">$${item.price}</p>
                <button class="add" data-id=${item.id}>Add to Cart</button>
            </div>
   </li> `;

    panel.appendChild(ul);
  });
}
function addToCart() {
  const allBtn = document.querySelectorAll(".add");
  allBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const clickedItem = menuItems.find((i) => i.id === parseInt(id));
      clickedItems.push(clickedItem);
      btn.innerHTML = `<button class="in-cart">
            <img src="images/check.svg" alt="Check" />
            In Cart
            </button>`;
      showInCart();
    });
  });
}

function showInCart() {
  let ul;
  panelCart.innerHTML = "";
  clickedItems.forEach((item) => {
    ul = document.createElement("ul");
    ul.classList.add("cart-summary");

    ul.innerHTML = `<li>
        <div class="plate">
          <img src=${item.image} alt=${item.alt} class="plate" />
          <div class="quantity">${item.count}</div>
        </div>
        <div class="content">
          <p class="menu-item">${item.name}</p>
          <p class="price">$${item.price}</p>
        </div>
        <div class="quantity__wrapper">
          <button class="decrease" >
            <img src="images/chevron.svg" class="down" data-id=${item.id} />
          </button>
          <div class="quantity">${item.count}</div>
          <button class="increase">
            <img src="images/chevron.svg" class="up" data-id=${item.id}/>
          </button>
        </div>
        <div class="subtotal">
          $ ${item.price * item.count}
        </div>

        </li>`;
    panelCart.appendChild(ul);
  });
  increaseItems();
}

function increaseItems() {
  quantityWrapper.forEach((wrapper) => {
    wrapper.addEventListener("click", (e) => {
      if (e.target.classList.contains("down")) {
        console.log(e.target);
        let id = e.target.dataset.id;
        const item = menuItems.find((i) => i.id === parseInt(id));
        item.count++;
    

        showInCart();
      }
    });
  });
}
window.addEventListener("DOMContentLoaded", () => {
  addItem(menuItems);
  addToCart();
  showInCart();
});
