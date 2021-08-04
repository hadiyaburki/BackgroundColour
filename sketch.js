var red
var green
var r
var g
var b

function setup() {
  createCanvas(400,400);
  red = createButton("red")
  red.position(100,200)
  red.mousePressed(redbackground)
  green = createButton("green")
  green.position(300,200)
  green.mousePressed(greenbackground)
  r = 0
  g = 0
  b = 0
}


function draw() 
{
  background(30);

}

function redbackground() {
r = 255
g = 0
b = 0
 
}

function greenbackground() {
r = 0
g = 255
b = 0

}

