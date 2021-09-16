var jakeimg,pathimg,path,jake,leftboundary,rightboundary;
function preload(){
  //pre-load images
jakeimg=loadAnimation("Runner-1.png","Runner-2.png");
pathimg=loadImage("path.png");


}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  jake=createSprite(180,340,50,170);
  jake.addAnimation("running",jakeimg);
  jake.scale=0.1
  path.addImage(pathimg)

  leftboundary=createSprite(0,300,100,600);
  rightboundary=createSprite(390,300,80,600);
  leftboundary.visible=false;
  rightboundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY=2
  jake.x=World.mouseX;
  if(path.y>400){
    path.y=height/2 ;
  }
  jake.collide(leftboundary);
  jake.collide(rightboundary);
  
drawSprites();
}
