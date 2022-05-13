"use strict";
const app = () => {
  const firstCardElement = document.querySelector(".card--1");
  const secondCardElement = document.querySelector(".card--2");
  const numberButtons = document.querySelectorAll(".card__rating-number");
  const submitButton = document.querySelector(".card__submit-btn");
  const resultPoll = document.querySelector(".card__result-poll");
  let _number: number = 0;

  function removeActiveButton() {
    numberButtons.forEach((button) => {
      button.classList.remove("card__rating-number--active");
    });
  }

  numberButtons.forEach((button) => {
    button.addEventListener("click", function () {
      removeActiveButton();
      button.classList.add("card__rating-number--active");
      _number = Number(button.innerHTML);
      resultPoll!.innerHTML = `You selected ${_number} out of 5`;
    });
  });

  submitButton?.addEventListener("click", function () {
    if (_number !== 0) {
      firstCardElement?.classList.add("card--hidden");
      secondCardElement?.classList.remove("card--hidden");
    } else {
      alert("Please select ratings for us.");
    }
  });
};

export default app;
