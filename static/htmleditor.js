const attachPoint = 'body'
document.addEventListener('DOMContentLoaded', function(){
    let attachElement = document.querySelector(attachPoint)
    attachElement.insertAdjacentHTML("afterbegin", `
        <div id="htmlEditor">
            <pre id="codeBlock" contenteditable="true"></pre>
            <iframe src="../pages/htmlpreview.html">
            </iframe>
        </div>
        `);
})
