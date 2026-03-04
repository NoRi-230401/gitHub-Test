let cR,cG,cB;

function setup() {
  createCanvas(400, 400);
  cR = random(255);
  cG = random(255);
  cB = random(255);
  }

function draw() {
  background(cR,cG,cB);
  // ellipse(mouseX, mouseY, 50, 50);
  triangle(mouseX, mouseY, mouseX+50, mouseY, mouseX+25, mouseY-40);
}
