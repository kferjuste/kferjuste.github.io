function setup() {
  createCanvas(windowWidth, (windowHeight+200));
  //wanna make it scrollable, do windowWidth and then pick a height
}

function draw() {
  background(250);

  //figure out color scheme and start making it look pretty: colored stokes, background color, type shit
  stroke('#1B4079');
  strokeWeight(4);
  rect(30, 170, (window.innerWidth - 60), 100, 20);
  textSize(20);
  noStroke();
  fill('#1B4079');
  textAlign(LEFT);
  text('unit 1 - machine learning TicTacToe', 40, 100);

  stroke('#4D7C8A');
  strokeWeight(4);
  rect(30, 320, (window.innerWidth - 60), 100, 20);
  noStroke();
  fill('#4D7C8A');
  textAlign(LEFT);
  text('unit 2 - 4-bit calculators', 40, 250);


  stroke('#7F9C96');
  strokeWeight(4);
  rect(30, 470, (window.innerWidth - 60), 100, 20);
  noStroke();
  fill('#7F9C96');
  textAlign(LEFT);
  text('unit 3 - building trusses', 40, 400);

  stroke('#8FAD88');
  strokeWeight(4);
  rect(30, 620, (window.innerWidth - 60), 100, 20);
  noStroke();
  fill('#8FAD88');
  textAlign(LEFT);
  text('unit 4 - personal project', 40, 550);

  //another possible color 'CBDF90'
}
