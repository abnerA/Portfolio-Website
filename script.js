let open1 = document.getElementById('open-modal');
let close1 = document.getElementById('modal');
let close2 = document.getElementById('close-modal');
let mainModal = document.getAnimations('background-modal');

function modal () {
    close1.style.display = 'block';
    document.body.style.backgroundColor = 'black';
    open1.style.opacity = '0.5';
    projectsImg.style.opacity = '0.5';
}

function modalClose () {
    close1.style.display = 'none';
    document.body.style.backgroundColor = '#fafafa';
    document.body.style.opacity = '1';
    open1.style.opacity = '1';
    projectsImg.style.opacity = '1';
}

open1.addEventListener('click', modal);
close2.addEventListener('click', modalClose);