class Circle {
    constructor(x,y,radius) {
        this.x = x;
        this.y = y
        this.radius = radius;
    }
}
//ve hinh tron
function createCircle() {
    var ctx = document.getElementById('myCanvas').getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    var circle = new Circle(x, y, radius);
    var color = getRandomColor();
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
//lay mau ngau nhien
function getRandomHex() {
    return Math.floor(Math.random()*255);
}

function getRandomColor () {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();

    return "rgb(" + red + "," + green  + "," + blue + ")";
}
//ve ngau nhieen nhieeuf hinhf tron
function createMultiCircle() {
    for (var  i = 0; i < 50; i++) {
        createCircle();
    }
}

createMultiCircle();

