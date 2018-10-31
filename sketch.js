var x = 80;
var y = 0;
var a = 200;
var b = 150;
var c = 366;
var d = 220;
var e = 470;
var f = 330;
var g = 540;
var h = 400;
var i = 610;
var j = 480;
var speed = 5;


function setup() {
  createCanvas(800, 960);
}

function draw() {

  background(0);
  currentTime = millis();
  if(currentTime > 200) {
  stroke(200, 9, 200);
  y += speed*1.8;
  b += speed;
  d += speed*1.5;
  f += speed*.8;
  h += speed*1.1;
  j += speed*1.3;



  line(x, y, x, y+30);
  line(a, b, a, b+50);
  line(c, d, c, d+45);
  line(e, f, e, f+40);
  line(g, h, g, h+37);
  line(i, j, i, j+42);
}
  if(y > height) {
    y = 0;
  }
  if(b > height) {
    b = 0;
  }
  if(d > height) {
    d = 0;
  }
  if(f > height){
    f = 0;
  }
  if(h > height){
    h = 0;
  }
  if(j > height){
    j= 0;
  }
  if(currentTime > 5000) {
fill(255, 255, 0);
noStroke()
ellipse(width/2, 50, 30, 30);
}
}
