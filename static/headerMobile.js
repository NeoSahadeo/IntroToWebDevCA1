'use strict';
let menu
let html
const body = document.querySelector('body')
let hamburger 
function main(){
    menu = document.querySelector('.nav-menu')
    html = document.querySelector('html')
    window.addEventListener('resize', resizeHandler)
    hamburger = document.getElementById('hamburger')
    hamburger.addEventListener('click', toggleVisibility)
}

function resizeHandler(e){
    if (window.innerWidth > 820 && menu.style.visibility == 'hidden'){
        menu.style.visibility = ''
    }
}

function toggleVisibility() {
    if (menu.style.visibility == 'hidden' || menu.style.visibility == ''){
        menu.style.visibility = 'visible';
        hamburger.classList.add('hamburger_turn')
        body.classList.add('stop-scrolling')
    }else{
        menu.style.visibility = 'hidden';
        hamburger.classList.remove('hamburger_turn')
        body.classList.remove('stop-scrolling')
    }
}

export {main}
