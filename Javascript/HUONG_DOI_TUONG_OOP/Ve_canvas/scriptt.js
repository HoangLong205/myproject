var c = document.getElementById('myCanvas');
var ctx = c.getContext("2d");

ctx.moveTo(0,0) ;
ctx.lineTo(200, 100);
ctx.stroke();

ctx.moveTo(100,0);
ctx.font = "30px Arial";
ctx.fillText("Hello World", 0,50)

ctx.beginPath(); //bắt đầu một đường vẽ mới
ctx.arc(95, 50, 40 ,0, 2*Math.PI); // (x,y) = toạ  độ tâm hình tròn
// dổi góc kết thúc để vẽ 1 phần của hình tròn
ctx.stroke();

var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');

// Create gradient
var grd = ctx2.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx2.fillStyle = grd;
ctx2.fillRect(10,10,150,80);


// Create circle gradient
var grd = ctx2.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx2.fillStyle = grd;
ctx2.fillRect(10,10,150,80);