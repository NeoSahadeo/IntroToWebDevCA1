'use strict';

let iframe
document.addEventListener('DOMContentLoaded', main)

function main() {
    iframe = document.getElementById('cssPreviewIframe')
    let preElements = document.querySelectorAll('[lang="css"]')
    preElements.forEach(element => {
        let titleTag = element.parentNode.querySelector('h3')
        if (titleTag){
            titleTag.insertAdjacentHTML('beforeend', `<span class="preview-button-container">
                <input class="preview-button" type="checkbox">
                </span>`)
        }
    })
    let inputElement = document.querySelectorAll('.preview-button')
    inputElement.forEach(element => {
        element.addEventListener('change', checkHandler)
    })
}

function checkHandler(){
    if(this.checked) {
        let preTag = this.parentNode.parentNode.parentNode.querySelector('pre')
        iframe.contentDocument.querySelector('#styleContainer').innerText = preTag.innerText.replace(/[\r\n]/gm, '')
    }else{
        iframe.contentDocument.querySelector('#styleContainer').innerText =  ''
    }
    let inputs = document.querySelectorAll('input[type="checkbox"]')
    inputs.forEach(element => {
        if (element != this){
            element.checked = false; 
        }
    })
}
