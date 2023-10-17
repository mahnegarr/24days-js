import { menuItems } from "./app.js";
const panel = document.querySelector(".panel");
const panelCart = document.getElementById("panel-cart");
const panelContainer = document.getElementById("container");

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
let total =[]
function showInCart() {
  panelCart.innerHTML = "";
  let ul;
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
     $${(item.price * item.count).toFixed(2)}
    </div>
    </li>`;
    total.push(item.price * item.count.toFixed(2))
    panelCart.appendChild(ul);
  });
  let totals;
  clickedItems.forEach((item) => {
    totals = document.createElement("div");
    totals.classList.add("totals");

    totals.innerHTML = `<div class="totals">
    <div class="line-item">
      <div class="label">Subtotal:${total}</div>
      <div class="amount price subtotal">$10.80</div>
    </div>
    <div class="line-item">
      <div class="label">Tax:</div>
      <div class="amount price tax">$1.05</div>
    </div>
    <div class="line-item total">
      <div class="label">Total:</div>
      <div class="amount price total">$11.85</div>
    </div>
  </div>`;
  panelContainer.appendChild(totals)
  });
  increaseItems();
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
window.addEventListener("DOMContentLoaded", () => {
  addItem(menuItems);
  addToCart();
  showInCart();
});
