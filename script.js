let open1 = document.getElementById('open-modal');
let close1 = document.getElementById('modal');
let close2 = document.getElementById('close-modal');
let mainModal = document.getAnimations('background-modal');
let menu = document.getElementById('menuBars');
let menuHeader = document.getElementById('header');
let barsButton = document.getElementById('bars');
let claseMain = document.getElementById('main');

function barsMenu () {
    if (menu.style.display != 'flex') {
        menu.style.display = 'flex';
        menuHeader.style.height = 'auto';
        claseMain.style.margin = '140px 10% 0 10%';
    } else if (menu.style.display = 'flex') {
        menu.style.display = 'none';
        menuHeader.style.height = '55px';
        claseMain.style.margin = '70px 10% 0 10%';
    }
 }

function modal () {
    close1.style.display = 'block';
    document.body.style.backgroundColor = 'black';
    open1.style.opacity = '0.5';
}

function modalClose () {
    close1.style.display = 'none';
    document.body.style.backgroundColor = '#fafafa';
    document.body.style.opacity = '1';
    open1.style.opacity = '1';
}


open1.addEventListener('click', modal);
close2.addEventListener('click', modalClose);
barsButton.addEventListener('click', barsMenu);