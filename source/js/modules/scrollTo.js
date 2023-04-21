import {Burger} from "./header/burger";

export const initScroll = () => {
  const buttons = document.querySelectorAll('[data-scroll-to-button]');

  if (buttons.length) {
    for (let button of buttons) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        const burger = new Burger();
        burger._closeMenu();
        document.querySelector(button.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
      });
    }
  }
};
