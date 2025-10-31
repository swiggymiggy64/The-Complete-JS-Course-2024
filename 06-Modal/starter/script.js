"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

function handleOpenModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function handleCloseModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].addEventListener("click", handleOpenModal));
}

function handleKeyDown(e) {
  // console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    handleCloseModal();
  }
}

btnCloseModal.addEventListener("click", handleCloseModal);
overlay.addEventListener("click", handleCloseModal);
document.addEventListener("keydown", handleKeyDown);
