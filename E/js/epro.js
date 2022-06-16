//hieu ung logo
const list =document.querySelectorAll('span')
var index = 0
setInterval((e)=> {
    list.forEach((e) => {
        e.classList.remove('change-properties')
    })
    list[index].classList.add('change-properties')
    index++
    if (index == list.length){
        index = 0
    }
}, 250)
//hieu ung chan trang
// const theCanvas = document.querySelector('canvas')
// const ctx = theCanvas.getContext('2d')
// const objects = []

// class Circle {
//     constructor(){
//         this.x = Math.random() * theCanvas.width
//         this.y = Math.random() * theCanvas.height
//         this.size = Math.random() * 20 + 1
//         this.speedX = Math.random() * 3 - 1
//         this.speedY = Math.random() * 3 - 1 
//     }
//     create(){
//         ctx.fillStyle = 'green'
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
//         ctx.fill()
//     }
//     update(){
//         this.x += this.speedX
//         if(this.x >= theCanvas.width){
//             this.x = 0 
//         }
//         this.y += this.speedY
//         if(this.y >= theCanvas.height){
//             this.y = 0
//         }

//     }
// }

// function addObjects(){
//     for(let i = 0; i < 200; i++){
//         objects.push(new Circle())
//     } 
// }
// addObjects()

// function createCircle(){
//     for(let i = 0; i < objects.length; i++){
//         objects[i].create()
//         objects[i].update()
//     }
// }
// createCircle()

// function clear(){
//     ctx.clearRect(0, 0, theCanvas.width, theCanvas.height)
//     createCircle()
//     requestAnimationFrame(clear)
// }
// clear()

// hieu ung input

const email = document.getElementById('email')
const alert = document.querySelector('.alert')
// /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/
const patternEmail = /^[^]+@[^]+\.[a-z]{2,3}$/
function checkText (){
    if(email.value.length == 0){
        alert.style.padding = '0px'
        alert.textContent = ''
    }
    else{
        
        if(email.value.match(patternEmail)){
            alert.textContent = 'Email valid'
            alert.style.color = 'aqua'
        }
        else{
            alert.style.padding = '0px 20px'
            alert.textContent = 'Email invalid'
            alert.style.color = 'red'
        }
    }
}

email.addEventListener('keyup',() => {
    
    checkText ()
})

checkText()

