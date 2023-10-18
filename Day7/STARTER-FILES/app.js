const billAmountInput = document.getElementById("bill-amount");
const peopleNumInput = document.getElementById("number-of-people");
const tipAmount = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-per-person");
const calcBtn = document.getElementById("calculate");

let billValue;
let peopleNumValue;

billAmountInput.addEventListener("input", (e) => {
  billValue = e.target.value;
  calculateTip();
});

peopleNumInput.addEventListener("input", (e) => {
  peopleNumValue = e.target.value;
});
const allTips = document.querySelectorAll('input[name="tip"]');

function calculateTip() {
  allTips.forEach((tip) => {
    tip.addEventListener("click", (e) => {
      selectedTip = e.target.value;
      tip = (billValue * selectedTip.split("%")[0]) / 100;
      let totalBill = (parseFloat(billValue) + tip) / parseInt(peopleNumValue);
      calcBtn.addEventListener("click", () => {
        tipAmount.innerHTML = tip.toFixed(2);
        totalPerPerson.innerHTML = totalBill.toFixed(2);
      });
    });
  });
}
