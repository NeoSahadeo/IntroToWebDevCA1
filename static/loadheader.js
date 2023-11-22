'use strict';

import {main as mainMini} from './headerMini.js'
import {main as mainMobile} from './headerMobile.js'

document.addEventListener('DOMContentLoaded', function(){
    const xhttp = new XMLHttpRequest() 
    const metaPage = document.querySelector('meta[name="page"]').content
    xhttp.addEventListener('load', xhttpListener)
    if (metaPage == 'home'){
        xhttp.open("GET", "./pages/header.html")
    }else{
        xhttp.open("GET", '../pages/header.html')
    }
    xhttp.send()
})
function printTitle(){
    let title = 'Intro To Web Dev'
    let index = 0
    let titleText = document.getElementById('logo')
    titleText.innerHTML = ''
    let randomNumber 
    let updateTitleText = setInterval(()=>{
        if (titleText.innerHTML.length > title.length-1){
            clearInterval(updateTitleText)
        }else{
            titleText.innerHTML += title[index] 
            index++
        }
    }, 60)
}
function currentPage(){
    const metaPage = document.querySelector('meta[name="page"]').content
    document.getElementById(metaPage).classList.add('current')
}
function xhttpListener(){
    const header = document.getElementsByTagName('header')[0]
    header.insertAdjacentHTML("afterbegin", this.response)
    printTitle()
    currentPage()
    
    // Load mini header
    mainMini()
    // Load mobile header
    mainMobile()

    // Highlighter for the nav
    const navLinks = document.querySelectorAll('#desktopNav > ul > li > a')
    const nav = document.querySelector('#desktopNav')
    navLinks.forEach(element => {
        element.addEventListener("mouseenter", moveHighlightEnter)
    })
    nav.addEventListener("mouseleave", moveHighlightExit)

    // Calculate the 'href' links for index.html
    const metaPage = document.querySelector('meta[name="page"]').content
    if (metaPage == 'home'){
        const regexSelectorEnd = /(\/.*){2}/g
        const regexSelectorBase = /^.*(?=\/)/g
        document.querySelector('#logoLink').href = "./"
        navLinks.forEach(element =>{
            if (element.id != 'home'){
                let matches = [...element.href.matchAll(regexSelectorEnd)]
                let baseMatches = [...element.href.matchAll(regexSelectorBase)]
                matches.forEach((matched, index) => {
                    element.href = baseMatches[0]+'/pages'+matched[1]
                })
            } else{
                element.href = './'
            }
        })
    }
}

function moveHighlightEnter(){
    const current = document.getElementsByClassName('current')[0]
    if (this != current){
        current.classList.remove('current')
        this.classList.add('current')
    }
}

function moveHighlightExit(){
    document.getElementsByClassName('current')[0].classList.remove('current')
    currentPage()
}
