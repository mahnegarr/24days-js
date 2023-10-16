import { menuItems } from "./app.js";
const panel = document.querySelector(".panel");
const panelCart = document.querySelector(".panel cart")

function addItem(menuItems) {
  let ul;
  menuItems.forEach((item) => {
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
let clickedItems =[];
function addToCart() {
  const allBtn = document.querySelectorAll(".add");
  allBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
       const clickedItem = menuItems.find((i) => i.id === parseInt(id));
       clickedItems.push(clickedItem)
      btn.innerHTML = `<button class="in-cart">
            <img src="images/check.svg" alt="Check" />
            In Cart
            </button>`;
    });
  });
}

function showInCart() {
    clickedItems.forEach(item=>{
        const ul = document.createElement("ul")
        ul.classList.add(".cart-summary")

        ul.innerHTML=`<li>
        <div class="plate">
          <img src=${item.image} alt=${item.alt} class="plate" />
          <div class="quantity">${item.count}</div>
        </div>
        <div class="content">
          <p class="menu-item">${item.name}</p>
          <p class="price">$${item.price}</p>
        </div>
        <div class="quantity__wrapper">
          <button class="decrease">
            <img src="images/chevron.svg" />
          </button>
          <div class="quantity">1</div>
          <button class="increase">
            <img src="images/chevron.svg" />
          </button>
        </div>
        <div class="subtotal">
          $6.34
        </div>
      </li>`
      panelCart.appendChild(ul)
    })
}

window.addEventListener("DOMContentLoaded", () => {
  addItem(menuItems);
  addToCart();
  showInCart()
});
