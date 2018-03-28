export default function burger() {

    const burger = document.querySelector('.menu-burger');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('active');
    });

}