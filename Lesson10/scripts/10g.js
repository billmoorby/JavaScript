function toggleButton(selector) {
  const buttonElement = document.querySelector(selector);

  if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled');
  } else {
    turnOffPreviousButton();

    buttonElement.classList.add('is-toggled');
  }
};

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
};