let box = document.querySelector('.box')
let y = Math.floor(Math.random() * 600);
let x = Math.floor(Math.random() * 1300);
let velocityX = 100
let velocityY = 100

const pxToInt = pixel => parseInt(pixel.slice(0, -2))
const px = num => num.toString() + 'px'

function animate() {
    requestAnimationFrame(animate)
    x += velocityX
    y += velocityY
    box.style.top = px(y)
    box.style.left = px(x)

    if(y >= 620) velocityY = -velocityY
    if(y <= 0) velocityY = -velocityY
    if(x <= 0) velocityX = -velocityX
    if(x >= 1320) velocityX = -velocityX
}

animate()