'use strict';
let oldTimeStamp
let secondsPassed
let physicsEnabled = false
function togglePhysics(){
    if (this.checked) {
        physicsEnabled = true
        window.requestAnimationFrame(gameLoop)
    }else{
        physicsEnabled = false
    }
}
function gameLoop(timeStamp){
    update()
    draw()

    // FPS
    // secondsPassed = (timeStamp - oldTimeStamp) / 1000
    // oldTimeStamp = timeStamp
    // Math.round(1/secondsPassed)

    if (physicsEnabled){
        window.requestAnimationFrame(gameLoop)
    }
}
function update(){
}
function draw(){
}
document.addEventListener('DOMContentLoaded', ()=>{
    const physicsCheckbox = document.querySelector('#enablePhysics')
    physicsCheckbox.addEventListener('click', togglePhysics)
})
