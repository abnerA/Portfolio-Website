const barsButton = document.getElementById('bars');
const menu = document.getElementById('menuBars');
let menuHeader = document.getElementById('header');
let claseMain = document.getElementById('main');


barsButton.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('drop-down');
    menuHeader.classList.toggle('header1');
    claseMain.classList.toggle('main1');
})
