//selecting all the html elements using the querySelector
const modal = document.querySelector("#modal");
const openModalBtn = document.querySelector("#open-modal-btn");
const closeModalBtn = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

//adding an click eventListener to the open button to add open class
openModalBtn.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

const closeModal = () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
};

//adding an click eventListener to the close button to remove open class
closeModalBtn.addEventListener("click", closeModal);

//adding an click eventListener to the overlay to remove open class
overlay.addEventListener("click", closeModal);
