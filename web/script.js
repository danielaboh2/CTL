const menu = document.getElementById('menu-f')
const menuHeight = menu.offsetTop;

addEventListener('scroll', () => {
    (pageYOffset > menuHeight) ? menu.classList.add('fixed'):menu.classList.remove('fixed')
})