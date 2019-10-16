// "<h1>Welcome to CSSDemo!</h1>"


// document.addEventListener("DOMContentLoaded", () => {

//     // const root = document.getElementById("root");
//     // ReactDOM.render(<Root store={store} />, root);
//     // <h1>Welcome to hangout!</h1>, root);
//     "<h1>Welcome to CSSDemo!</h1>"
// });




// import './styles/index.scss';

window.addEventListener('DOMContentLoaded', () => {

    var canvas = document.querySelector('.myCanvas');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, width, height);
    //End the canvas setup code


    // Utility functions
    //Converts degrees to radians
    function degToRad(degrees) {
        return degrees * Math.PI / 180;
    };

    //random number between given lower and upper bounds
    function rand(min, max) {
        // return Math.floor(Math.random() * (max - min + 1)) + (min);
    }

    // Return the random number between max and min 
    function random(min, max) {
        var num = Math.floor(Math.random() * (max - min)) + min;
        return num;
    }

    //Ball constructor
    function Ball(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }


    Ball.prototype.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    };

    // define ball update method

    Ball.prototype.update = function () {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }

        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }

        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }

        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    };

    // define ball collision detection

    Ball.prototype.collisionDetect = function () {
        for (var j = 0; j < balls.length; j++) {
            if (!(this === balls[j])) {
                var dx = this.x - balls[j].x;
                var dy = this.y - balls[j].y;
                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + balls[j].size) {
                    balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
                }
            }
        }
    };

    // define array to store balls and populate it

    var balls = [];

    while (balls.length < 25) {
        var size = random(10, 20);
        var ball = new Ball(
            // ball position always drawn at least one ball width
            // away from the adge of the canvas, to avoid drawing errors
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            size
        );
        balls.push(ball);
    }


    // define loop that keeps drawing the scene constantly
    function loop() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < balls.length; i++) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }

        requestAnimationFrame(loop);
    }

    loop();





    // // Drawing the large multitriangle animation    
    // // Moves the coordinate origin from (0, 0) to the center of the canvas 
    // ctx.translate(width / 2, height / 2);

    // var length = 250;
    // var moveOffset = 20;

    // for (var i = 0; i < length; i++) {
    //     ctx.fillStyle = 'rgba(' + (255 - length) + ', 0, ' + (255 - length) + ', 0.9)';
    //     ctx.beginPath();
    //     ctx.moveTo(moveOffset, moveOffset);
    //     ctx.lineTo(moveOffset + length, moveOffset);
    //     var triHeight = length / 2 * Math.tan(degToRad(60));
    //     ctx.lineTo(moveOffset + (length / 2), moveOffset + triHeight);
    //     ctx.lineTo(moveOffset, moveOffset);
    //     ctx.fill();

    //     length--;
    //     moveOffset += 0.7;
    //     ctx.rotate(degToRad(5));
    // }



    // //Create the image object and set source
    // var image = new Image();
    // image.src = './images/firefox.png';

    // //loads the image
    // image.onload = function () {
    //     ctx.drawImage(image, 50, 50);
    //     ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
    // }



    // // Triangles
    // ctx.fillStyle = 'rgb(255, 0, 0)';
    // ctx.beginPath();
    // ctx.moveTo(50, 50);

    // ctx.lineTo(150, 50);
    // var triHeight = 50 * Math.tan(degToRad(60));
    // ctx.lineTo(100, 50 + triHeight);
    // ctx.lineTo(50, 50);
    // ctx.strokeStyle = 'rgb(255, 0, 0)';
    // ctx.lineWidth = 10;
    // // ctx.fill();
    // ctx.stroke();



    // // Circles
    // ctx.fillStyle = 'rgb(0, 0, 255)';
    // ctx.beginPath();
    // ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
    // ctx.fill();

    // ctx.fillStyle = 'yellow';
    // ctx.beginPath();
    // ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
    // ctx.lineTo(200, 106);
    // ctx.fill();


    // //text on canvas
    // ctx.strokeStyle = 'white';
    // ctx.lineWidth = 1;
    // ctx.font = '36px arial';
    // ctx.strokeText('Canvas text', 50, 50);

    // ctx.fillStyle = 'red';
    // ctx.font = '48px georgia';
    // ctx.fillText('Canvas text', 50, 150);

    // Drawing Rectangles
    // ctx.fillStyle = 'rgb(255, 0, 0)';
    // ctx.fillRect(50, 50, 100, 150);

    // ctx.fillStyle = 'rgb(0, 255, 0)';
    // ctx.fillRect(75, 75, 100, 100);

    // ctx.fillStyle = 'rgba(255, 0, 255, 0.33)';
    // ctx.fillRect(25, 100, 175, 50);

    // ctx.strokeStyle = 'rgb(255, 255, 255)';
    // ctx.lineWidth = 5;
    // ctx.strokeRect(25, 25, 175, 200);

    // document.getElementById('app').innerText = "Hello World!";
});


