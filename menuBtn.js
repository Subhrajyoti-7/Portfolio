// Humburger button (Menu Button)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        menu.classList.add('show');
        menu.classList.remove('hide');
    } else {
        menu.style.display = 'none';
        menu.classList.add('hide');
        menu.classList.remove('show');
    }
});

menu.onclick = () => {
    menu.style.display = 'none';
};

window.onclick = () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }
};