const buttonElement = document.querySelector('.js-button');

const eventListener = () => {
  console.log('clicked');
};

const eventListener2 = () => {
  console.log('clicked 2');
};

buttonElement.addEventListener('click', eventListener);

buttonElement.addEventListener('click', eventListener2);

buttonElement.removeEventListener('click', eventListener2);