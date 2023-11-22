'use strict';
let alertBox

function copyMe(){
    let preElement = this.parentNode.parentNode.parentNode.querySelector('pre')
    navigator.clipboard.writeText(preElement.innerText)

    alertBox.innerHTML += `<div class='copy-notif'>Copied!</div>`;
    setTimeout(()=> {
        alertBox.querySelector('div').remove()
        this.style.backgroundColor = ''
    }, 3000)
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('body').insertAdjacentHTML('beforeend', `<div id="alertBox"></div>`)
    alertBox = document.querySelector('#alertBox')
    const preElements = document.querySelectorAll('.pre-title');
    for (let i = 0; i < preElements.length; i++){
        preElements[i].insertAdjacentHTML('beforeend', `<span class='copy-container'><button type="button" aria-label="Copy current value located in pre element below" class="copy">
            <svg xmlns="http://www.w3.org/2000/svg" class="copy-svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#828282" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            </button></span>`)
    }
    let copyButtons = document.querySelectorAll('.copy');
    copyButtons.forEach(element => {
        element.addEventListener('click', copyMe)
    })
})
