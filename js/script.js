const writeUsButton = document.querySelector(`.write-us`);
const modal = document.querySelector(`.modal`);
const modalCloseButton = document.querySelector(`.modal-close`);

writeUsButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modal.classList.add(`modal-show`);
});

modalCloseButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modal.classList.remove(`modal-show`);
});

window.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Escape`) {
    modal.classList.remove(`modal-show`);
  }
});
