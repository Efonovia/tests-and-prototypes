let canvas = document.querySelector('#canvas');
ctx = canvas.getContext('2d');
let keyActions = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};


function Avatar() {
    this.x = 250;
    this.y = 408;
    this.xSpeed = 5;
    this.ySpeed = 2;
};

Avatar.prototype.draw = function() {
    ctx.fillRect(this.x, this.y, 20, 20);
}

Avatar.prototype.setDirection = function(direction) {
    if (direction === 'up') {
        this.xSpeed = 0;
        this.ySpeed = 15
    }
    else if (direction === 'right') {
        this.xSpeed = 5;
        this.ySpeed = 0;
    }
    else if (direction === 'left') {
        this.xSpeed = -5;
        this.ySpeed = 0;
    }
    else {
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
};

Avatar.prototype.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.y > 50) {
        this.ySpeed = -this.ySpeed;
    }
    else if(this.y > 500 || this.y === 40) {
        this.ySpeed = 0;
    }
    else if (this.x > 500 || this.x < 0) {
        this.xSpeed = -this.xSpeed;
    }
};

let avatar = new Avatar();

document.querySelector('body').addEventListener('keydown', function(event) {
    let direction = keyActions[event.keyCode];
    avatar.setDirection(direction);
});

setInterval(function () {
    ctx.clearRect(0, 0, 500, 500);
    avatar.draw();
    
    ctx.strokeRect(0, 0, 500, 500);
}, 300);

