'use strict';

/////////////////////////////////////////////
// Making a burger Menu
var burgerButton = document.querySelector('.header-nav__buttons_item.menu');
var header = document.querySelector('.header');
var menu = document.querySelector('.header-nav__buttons_item.menu');
var closeIcon = document.querySelector('.header-nav__buttons_item-icon.close');
var openIcon = document.querySelector('.header-nav__buttons_item-icon.open');

burgerButton.addEventListener('click', function () {
    header.classList.toggle('open');

    if (header.classList.contains('open')) {
        menu.classList.add('open');
    } else {
        menu.classList.remove('open');
    }
    ////////
    if (menu.classList.contains('open')) {
        closeIcon.style.display = 'block';
        openIcon.style.display = 'none';
    } else {
        closeIcon.style.display = 'none';
        openIcon.style.display = 'block';
    }
});

/////////////////////////////////////////////
// Making Dark & Light mode
var modeButton = document.querySelector('.header-nav__buttons_item.mode');
var swithModeButton = document.querySelector('.header-nav__menu-switch');
var lightModeIcon = document.querySelector('.header-nav__buttons_item-icon.light');
var darkModeIcon = document.querySelector('.header-nav__buttons_item-icon.dark');
var styleAttribute = document.querySelector('#style-mode');

modeButton.addEventListener('click', styleMod);
swithModeButton.addEventListener('click', styleMod);

function styleMod() {
    this.classList.toggle('open');
    ////////
    if (this.classList.contains('open')) {
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'block';
        // changing mode
        styleAttribute.setAttribute('href', 'css/dark-style.min.css');
    } else {
        lightModeIcon.style.display = 'block';
        darkModeIcon.style.display = 'none';
        // changing mode
        styleAttribute.setAttribute('href', 'css/style.min.css');
    }
}