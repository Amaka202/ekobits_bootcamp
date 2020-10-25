var canvas = document.getElementById("my-canvas");
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

var ctx = canvas.getContext('2d');

// // var upperLeftX = 0;
// // var upperLeftY = 0;
// // var width = 50;
// // var height = 50;
// // ctx.fillStyle = "green";
// // ctx.fillRect(upperLeftX, upperLeftY, width, height);

// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.lineTo(50, 40);
// ctx.lineTo(0, 80);
// ctx.fill();
// ctx.closePath();

var square = {
    corner: [0,0],
    width: 50,
    height: 50,
    color: "green",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
    }
}
var intervalId = setInterval(draw, 1000);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    square.corner[0] += 2;
    square.corner[1] += 2;
    square.draw();
}

draw();
