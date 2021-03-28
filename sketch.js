var fixedRect, movingRect,F3,F4,F5;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  F3 = createSprite(200,50,150,100)
  F3.shapeColor = "green";
  F3.debug = true;
  F4 = createSprite(500,300,150,100)
  F4.shapeColor = "green";
  F4.debug = true;
  F5 = createSprite(700,50,150,100)
  F5.shapeColor = "green";
  F5.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}







function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
touching(movingRect,F3);
touching(movingRect,F4);
touching(movingRect,F5);
touching(movingRect,fixedRect);







  drawSprites();
}