'use strict';

const attachPoint = 'body';

function seperator(matchesArray){
    let normalisedArray = new Array();
    matchesArray.forEach(element => {
        const elementLength = element[0].length
        const elementOffset = element.index + elementLength
        const inputString = element.input
        const selectedString = inputString.slice(element.index, elementOffset)
        let partionedQuery = indexPartitioner(element.index, selectedString)
        normalisedArray.push(...partionedQuery)
    })
    return normalisedArray
}

function indexPartitioner(index, string) {
    let posArray = new Array();
    if (string.length > 0){
        for (let i = 0; i < string.length; i++){
            posArray.push([string[i], index+ i])
        }
        // console.log(posArray)
        return posArray
    }
}

window.onload = () => {
    let attachElement = document.querySelector(attachPoint)
    attachElement.insertAdjacentHTML("afterbegin", `
    <div id="regexEditor">
        <h4>Regex Editor</h4>
        <pre id="testRegex" contenteditable="true"></pre>
        <h4>Test String</h4>
        <pre id="testString" contenteditable="true"></pre>
        <h4>Output</h4>
        <pre id="output"></pre>
    </div>
        `);
    attachElement.addEventListener('keyup', (event) => {
        regexInator();
    })
    function regexInator() {
        let queryRegex = document.getElementById('testRegex').innerText
        let queryString = document.getElementById('testString').innerText
        if (queryRegex !== ''){
            const matchesArray = [...queryString.matchAll(queryRegex)]
            const indexedMatches = seperator(matchesArray)
            const indexedString = indexPartitioner(0, queryString)
            indexedMatches.forEach(element => {
                indexedString[element[1]] = ["<span style='color:red'>" + element[0] + "</span>", element[1]]
            })
            let finalString = ''
            for (let i = 0; i < indexedString.length; i++){
                finalString += indexedString[i][0]
            }
            // console.log(indexedString)
            // console.log(finalString)
            document.getElementById('output').innerHTML = finalString
        } else {
            document.getElementById('output').innerHTML = queryString
        }
    }
    regexInator()
}
