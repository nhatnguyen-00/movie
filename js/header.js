const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


const searchToggle = document.querySelector('.search-toggle');
const headerSearch = document.querySelector('.header-search');
const iconSearch = document.querySelector('.icon-search');

searchToggle.addEventListener('click', function() {
    headerSearch.classList.toggle('active');
})
iconSearch.addEventListener('click', function() {
    if (menuLinks.classList.contains('active')) {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }
    headerSearch.classList.toggle('active');
})

