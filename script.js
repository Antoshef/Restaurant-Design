
let nav = document.getElementsByClassName('e-nav')[0];
let header = document.getElementsByClassName('c-header')[0];
window.onscroll = function() {scroll()};
let sticky = header.offsetTop;

function openMenu() {
    nav.style.left = '0';
};

function closeMenu() {
    nav.style.left = '-100%'
};

function scroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    };
};
