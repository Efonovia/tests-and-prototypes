let canvas = document.querySelector("#canvas");
ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let keyActions = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};



function showMarkers() {
    ctx.fillRect(0, 100, 20, 2);
    ctx.fillRect(0, 200, 20, 2);
    ctx.fillRect(0, 300, 20, 2);
    ctx.fillRect(0, 400, 20, 2);
    ctx.fillRect(0, 500, 20, 2);
}

showMarkers();


class Avatar {
    constructor() {
        const GRAVITY = 7;
        this.x = 70;
        this.y = height-100;
        this.width = 100;
        this.height = 100;
        this.xSpeed = 70;
        this.ySpeed = 20;
        this.gravity = GRAVITY;
        this.onGround = true;
    }
    
    draw = () => {
        const avatarImg = new Image();
        avatarImg.src = "avatar.png";
        avatarImg.onload = () => ctx.drawImage(avatarImg, this.x, this.y, this.width, this.height);
    }
    
    setDirection = (direction) => {
        switch (direction) {
            
            case "left": 
            this.x -= this.xSpeed;
            if(this.x < 0) {
                    this.x = 0;
                }
                break;
                
                case "down": 
                this.y += this.ySpeed;
                if(this.y > (height - 100)) {
                    this.y = height - 100;
                }
                break;
            
                case "right":
                    this.x += this.xSpeed;
                    if(this.x > 900) {
                        this.x = 900;
                    }
                    break;
                }
            }
            
            
    jump = () => {
        const img = new Image();
        img.src = "game_bg.jpg";
        let jumpInterval = setInterval(() => {
            ctx.clearRect(0, 0, 1000, 1000);
            ctx.drawImage(img, 0, 0);
            this.draw();
            blob.draw();
            showMarkers();
            console.log(this.y);
            if(this.y > 300 && !this.d) {
                this.y -= this.gravity;
            } else {
                this.goingDown = true;
                this.y += this.gravity;
                if(this .y > (height - 100)) {
                    this.goingDown = false;
                    this.y  = height - 100;
                    clearInterval(jumpInterval);
                }
            }
        }, 10);
    }
}

class Obstacle {
    constructor() {
        let possibleWidths = [35, 40, 45, 50];
        let possibleHeights = [65, 70, 75, 80, 85, 90, 95, 100];
        let possiblePositions = [];
        for (let i = 250; i < 900; i += 100) {
            possiblePositions.push(i);
        }
        let positionX = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
        let randWidth = possibleWidths[Math.floor(Math.random() * possibleWidths.length)];
        let randHeight = possibleHeights[Math.floor(Math.random() * possibleHeights.length)];
        this.height = randHeight;
        this.width = randWidth;
        this.x = positionX;
        this.y = height - this.height;
        this.obstacleSpeed = 10;
    }
    
    draw = () => {
        const obstacleImg = new Image();
        obstacleImg.src = "obstacle.png";
        obstacleImg.onload = () => ctx.drawImage(obstacleImg, this.x, this.y, this.width, this.height);
    } 
    
    move = () => {
        setInterval(() => {
            this.x -= this.obstacleSpeed;
        }, 10);
    }
}


const img = new Image();
img.src = "game_bg.jpg";
img.onload = () => ctx.drawImage(img, 0, 0);

let mario = new Avatar();
let blobs = [];
window.onload = () => {
    mario.draw();
    for(let i = 0; i < 3; i++) {
        blobs[i] = new Obstacle();
        blobs[i].draw();
        blobs[i].move();
    }
    console.log(blobs);
};


document.querySelector('body').addEventListener('keydown', (e) =>{
    if(keyActions[e.keyCode] === "up") {
        mario.jump();
        ctx.drawImage(img, 0, 0);
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.drawImage(img, 0, 0)
        blob.draw();
        blob.move();
    }
});

let num = 0;
let fibonacciSequence = [];
fibonacciSequence.push(num);
fibonacciSequence.push(num + 1);

for(let i = 1; i < 100; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i]);
}
console.log(fibonacciSequence);

const range = (min, max) => {
    let rangeList = [];
    for(let i = min; i < max; i++) {
        rangeList.push(i);
    }
    return rangeList;
}


// REPETITIVE BOUNCING (JUST INCASE)

// jump = () => {
//     if(this.y > 300 && !this.goingDown) {
//         this.y -= this.gravity;
//     } else {
//         this.goingDown = true;
//         this.y += this.gravity;
//         if(this .y > (height - 100)) {
//             this.goingDown = false;
//             this.y  = height - 100;
//         }
//     }
// }