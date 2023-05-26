let leftPupil = document.querySelector('.left-pupil')
let leftEye = document.querySelector('.left-eye')
let rightEye = document.querySelector('.right-eye')
let rightPupil = document.querySelector('.right-pupil')
const deg = Math.PI/180


function getAngle(x1, y1, x2, y2) {
    let dx = x2 - x1
    let dy = y2 - y1
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI
    return deg
}

const getDistance = (x1, y1, x2, y2) => Math.sqrt(((y2-y1)*(y2-y1)) + ((x2-x1)*(x2-x1)))

leftPupil.style.left = `${-(25.5*Math.cos(90*deg) - 25.5)}px`
leftPupil.style.top = `${-(25.5*Math.sin(90*deg) - 25.5)}px`
rightPupil.style.right = `${-(25.5*Math.cos(90*deg) - 25.5)}px`
rightPupil.style.top = `${-(25.5*Math.sin(90*deg) - 25.5)}px`
window.addEventListener('mousemove', (e) => {
    let Ax = e.clientX
    let Ay = e.clientY
    let Lx = 990.5
    let Ly = 331.5
    let Rx = 1110
    let Ry = 321

    let leftEyeAngle = getAngle(Ax, Ay, Lx, Ly)
    let rightEyeAngle = getAngle(Ax, Ay, Rx, Ry)
    leftEye.style.transform = `rotate(${leftEyeAngle-90}deg)`
    rightEye.style.transform = `rotate(${rightEyeAngle-90}deg)`


})

