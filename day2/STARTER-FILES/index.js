import { menuItems } from "./app.js";
const panel = document.querySelector(".panel");
const panelCart = document.getElementById("panel-cart");
const subtotalDiv = document.querySelector(".price.subtotal");
const TaxDiv = document.querySelector(".price.tax");
const totalDiv = document.querySelector(".price.total");
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
      clickedItem.count = 1;
      clickedItems.push(clickedItem);
      btn.innerHTML = `<button class="in-cart">
            <img src="images/check.svg" alt="Check" />
            In Cart
            </button>`;
      showInCart();
    });
  });
}
let subtotal = 0;
let priceTax = 0;
let total = 0;
function showInCart() {
  panelCart.innerHTML = "";
  let ul;
  clickedItems.forEach((item) => {
    const itemTotal = item.price * item.count;
    subtotal = itemTotal;
    priceTax = subtotal * 0.09;
    total = subtotal + priceTax;
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
    $${(item.price * item.count).toFixed(2)}
    </div>
    </li>`;
    panelCart.appendChild(ul);
    subtotalDiv.innerHTML = `$${subtotal.toFixed(2)}`;
    TaxDiv.innerHTML = `$${priceTax.toFixed(2)}`;
    totalDiv.innerHTML = `$${total.toFixed(2)}`;
  });

  increaseItems();
  decreaseItems();
}
function increaseItems() {
  const upBtns = document.querySelectorAll(".up");
  const quantity = document.querySelector(".quantity");
  upBtns.forEach((up) => {
    up.addEventListener("click", (e) => {
      let id = e.target.dataset.id;
      let item = menuItems.find((i) => i.id === parseInt(id));
      item.count++;
      quantity.innerHTML = item.count;
      showInCart();
    });
  });
}
function decreaseItems() {
  const upBtns = document.querySelectorAll(".down");
  const quantity = document.querySelector(".quantity");
  upBtns.forEach((down) => {
    down.addEventListener("click", (e) => {
      let id = e.target.dataset.id;
      let item = menuItems.find((i) => i.id === parseInt(id));
      if (item.count < 1) {
        clickedItems = clickedItems.filter((item) => item.id !== parseInt(id));
        showInCart()

      } else {
        item.count--;
      }
      quantity.innerHTML = item.count;
      showInCart();
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  addItem(menuItems);
  addToCart();
  showInCart();
});
