var canvas;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  
}

function draw() {
  background(220);
  frameRate(0.1);
  
  
  const NUM_DOTS = 400;
  
  for (let i = 0; i < NUM_DOTS; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() *window.innerHeight;
    let a =  10 + Math.random() *5
    let b = 10 + Math.random() *5
    stroke(0.5);
    ellipse(x, y, a, b)
  }
 
}

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}