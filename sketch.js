function setup() {
  createCanvas(windowWidth, (windowHeight+200));
  //wanna make it scrollable, do windowWidth and then pick a height
}

function draw() {
  background(250);
  
  //make everything in terms of the windowWidth so that it's adjusting everytime (TO DO)
  
  //figure out color scheme and start making it look pretty: colored stokes, background color, type shit
  rect(30, 20, (window.innerWidth - 60), 100, 20);
  rect(30, 170, (window.innerWidth - 60), 100, 20);
  rect(30, 320, (window.innerWidth - 60), 100, 20);
  rect(30, 470, (window.innerWidth - 60), 100, 20);
}

