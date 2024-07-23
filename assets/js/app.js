const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

const render = (days, hours, minutes, seconds) => {
  daysElement.innerHTML = String(days).padStart("2", 0);
  hoursElement.innerHTML = String(hours).padStart("2", 0);
  minutesElement.innerHTML = String(minutes).padStart("2", 0);
  secondsElement.innerHTML = String(seconds).padStart("2", 0);
};

const countdown = () => {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const targetDate = new Date(2024, 7, 31);

  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  render(days, hours, minutes, seconds);
};

countdown();
setInterval(countdown, 1000);


let btnMenu = document.getElementById ('btn-menu')
let menu = document.getElementById ('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener ('click', ()=> {
  menu.classList.add('abrir-hamburguer')
})

menu.addEventListener ('click', ()=> {
  menu.classList.remove('abrir-hamburguer')
})



