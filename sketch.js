var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300, 100, 90, 20);
  fixedRect.shapeColor="green"
  movingRect=createSprite(400, 200, 50, 70);
  movingRect.shapeColor="green"
movingRect.debug=true
fixedRect.debug=true
}

function draw() {
  background(0,0,0);  
movingRect.x=World.mouseX
movingRect.y=World.mouseY
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
  movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2&&
  fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2){
  fixedRect.shapeColor="red"
movingRect.shapeColor="red"

 }
 else
 {
   fixedRect.shapeColor="yellow"
movingRect.shapeColor="yellow"

 }
  drawSprites();
}