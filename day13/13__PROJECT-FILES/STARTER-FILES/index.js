const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const dotBtn = document.querySelector(".dot");
const modal = document.querySelector(".modal");

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  modal.classList.remove("centered");
}

dotBtn.addEventListener("click", () => {
  overlay.style.display = "block";
  modal.style.display = "block";
  modal.classList.add("centered");
});
