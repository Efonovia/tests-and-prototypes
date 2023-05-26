document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
ctx.strokeRect(0, 0, canvas.width, canvas.height);

let blackbox = ctx

// SPEEDSSSSSSSSSSSS

let speeds = [1, 3, 6, 9, 12, 15, 18];

  
let x = 3;
setInterval(function moveRed() {
    ctx.clearRect(3, 35, 1050, 60);
    ctx.fillStyle = 'red';
    ctx.fillRect(x, 50, 30, 30);
    x += speeds[Math.floor(Math.random(0, 1) * 6)];

    if (x >= 1050) {
        x = 1040;
    }
}, 20);

setInterval(function moveGreen() {
    ctx.clearRect(3, 115, 1050, 60);
    ctx.fillStyle = 'green';
    ctx.fillRect(x, 130, 30, 30);
    x += speeds[Math.floor(Math.random(0, 1) * 6)];

    if (x >= 1050) {
        x = 1040;
    }
}, 20);

setInterval(function moveYellow() {
    ctx.clearRect(3, 195, 1050, 60);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x, 210, 30, 30);
    x += speeds[Math.floor(Math.random(0, 1) * 6)];

    if (x >= 1050) {
        x = 1040;
    }
}, 20);

setInterval(function movePurple() {
    ctx.clearRect(3, 275, 1050, 60);
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, 290, 30, 30);
    x += speeds[Math.floor(Math.random(0, 1) * 6)];

    if (x >= 1050) {
        x = 1040;
    }
}, 20);

setInterval(function moveBlue() {
    ctx.clearRect(3, 355, 1050, 60);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, 370, 30, 30);
    x += speeds[Math.floor(Math.random(0, 1) * 6)];

    if (x >= 1050) {
        x = 1040;
    }
}, 20);

setInterval(function moveOrange() {
    ctx.clearRect(3, 435, 1050, 60);
    ctx.fillStyle = 'orange';
    ctx.fillRect(x, 450, 30, 30);
    x += speeds[Math.floor(Math.random(0, 1) * 6)];

    if (x >= 1050) {
        x = 1040;
    }
}, 20);

setInterval(function moveBlack() {
    ctx.clearRect(3, 515, 1050, 60);
    ctx.fillStyle = 'black';
    ctx.fillRect(x, 530, 30, 30)
    x += speeds[Math.floor(Math.random(0, 1) * 6)]

    if (x >= 1050) {
        x = 1040;
    }
}, 20);


