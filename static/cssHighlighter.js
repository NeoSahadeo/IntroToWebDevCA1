'use strict';
const cssTokeniser = /(?<cssSelectors>--.*(?=:)|--.*(?=\))|[\w\-_]+(?!(.*;)|\)|\(%|rem|em|px|deg|vw|vh|vmin|vmax|pt|pc|px|in|mm|cm|ch|ex|.*!important))|(?<symbols>[.{}>~|=+*$:;,()#\[\]@])|(?<attributeName>[\w\-]+(?=:))|(?<units>%|rem|em|px|deg|vw|vh|vmin|vmax|pt|pc|px|in|mm|cm|ch|ex|var|translate)|(?<hexColour>(?<=\#).*(?=;))|(?<numbers>-?[\d]+)|(?<string>['"].*['"])|(?<attributeValue>[\w-]+)|(?<spaces>\s)/gm

// Colours
const cssSelectorColor = '#fa8e0a'; 
const symbolsColor = '#05fc81'; 
const attributeNameColor = '#3599d4'; 
const stringColor = '#00ff08'; 
const numbersColor = '#ff0d3d'; 
const unitColor = '#ff00f2'; 
const hexColor = '#00ff11'; 
const spacesColor = '';
const attributeValueColor = '#ffe49c';

function returnTokens(string){
    let cssTokenArray = new Array()
    try {
        let matches = string.matchAll(cssTokeniser)
        matches.forEach(element => {
            if(element){
                cssTokenArray.push(element)
            }
        })
    } catch (error) {
        // browser support
        let matches = cssTokeniser.exec(string)
        while (matches) {
            cssTokenArray.push(matches)
            matches = cssTokeniser.exec(string)
        }
    }
    return cssTokenArray
}

function highlighter(array) {
    let arrayReconstruct = new Array(array.length)
    array.forEach((element, index) => {
        //highlight selectors
        if (element.groups.cssSelectors) {
            element = `<span style="color:${cssSelectorColor}">`+element[0]+'</span>'
            arrayReconstruct[index] = element
            return
        }
        //highlight symbols
        if (element.groups.symbols) {
            element = `<span style="color:${symbolsColor}">`+element[0]+'</span>'
            arrayReconstruct[index] = element
            return
        }
        //highlight attribute names
        if (element.groups.attributeName) {
            element = `<span style="color:${attributeNameColor}">`+element[0]+'</span>'
            arrayReconstruct[index] = element
            return
        }
        //highlight strings
        if (element.groups.string) {
            element = `<span style="color:${stringColor}">`+element[0]+'</span>'
            arrayReconstruct[index] = element
            return
        }
        //highlight numbers
        if (element.groups.numbers) {
            element = `<span style="color:${numbersColor}">`+element[0]+'</span>'
            arrayReconstruct[index] = element
            return
        }
        //highlight spaces
        if (element.groups.spaces) {
            element = `<span style="color:${spacesColor}">`+element[0]+'</span>'
            arrayReconstruct[index] = element
            return
        }
        //highlight units
        if (element.groups.units) {
            element = `<span style="color:${unitColor}">`+element[0]+'</span>'
            arrayReconstruct[index] = element
            return
        }
        //highlight hexColor
        if (element.groups.hexColour) {
            element = `<span style="color:${hexColor}">`+element[0]+'</span>'
            arrayReconstruct[index] = element
            return
        }
        //highlight attributeValue
        if (element.groups.attributeValue) {
            element = `<span style="color:${attributeValueColor}">`+element[0]+'</span>'
            arrayReconstruct[index] = element
            return
        }
    }) 
    return arrayReconstruct
}

document.addEventListener('DOMContentLoaded', ()=>{
    let matches = document.querySelectorAll('[lang="css"]')
    matches.forEach(element => {
        highlightConstructor(element)
        element.addEventListener('keyup', highlightAuto)
    })
})

function highlightConstructor(element){
    let stringRecontruct = new String()
    let tokens = returnTokens(element.innerText)
    let result = highlighter(tokens)
    result.forEach(arrayElement => {
        stringRecontruct += arrayElement
    })
    element.innerHTML = stringRecontruct
}
function highlightAuto() {
}
