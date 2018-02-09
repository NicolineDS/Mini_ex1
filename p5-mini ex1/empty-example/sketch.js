function setup() {
createCanvas(2000,2000);
}

function draw() {
  background('#fae');
  //body
  fill(255,0,0);
rect(500,300,100,100);

//head
fill(0,0,255);
ellipse(550,250,100,100);

//eyes
fill(0,255,0);
ellipse(530,250,30,30);
ellipse(570,250,30,30);

//arms
strokeWeight(4); // Thicker
line(390, 330, 500, 340);
line(600,340,680,300);

//legs
line(430,500,500,400);
line(660,500,600,400);

//text
fill(255,0,0);
textSize(32);
text('HELLO WORLD', 440, 560);

}
