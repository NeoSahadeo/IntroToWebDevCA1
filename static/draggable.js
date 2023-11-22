let relativePosX = 0
let relativePosY = 0

document.addEventListener('DOMContentLoaded', ()=>{
    document.addEventListener('mouseup', ()=> {
        document.removeEventListener('mousemove', mouseHandler)
    })
    document.addEventListener('mousedown', (event)=> {
        const element = event.target
        const elementBox = element.getBoundingClientRect()
        relativePosX = event.clientX - elementBox.x
        relativePosY = event.clientY - elementBox.y
        document.addEventListener('mousemove', mouseHandler)
    })
    function mouseHandler(event){
        const element = event.target
        if (element.getAttribute('isdraggable')){
            element.parentElement.style.left = `${event.clientX - relativePosX}px`
            element.parentElement.style.top = `${event.clientY - relativePosY}px`
        }
    }
})
