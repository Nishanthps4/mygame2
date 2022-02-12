var bg, bgimg
var ship, shipimg
var wall1, wall2
var ast1, ast1img
var ast2, ast2img
var ast3, ast3img
var base

function preload(){
bgimg=loadImage("space.png");
shipimg=loadImage("spaceship.png");
ast1img=loadImage("asteroid1.png");
ast2img=loadImage("asteroid2.png");
ast3img=loadImage("asteroid3cracked.png");

}
function setup(){
createCanvas(windowWidth - 1200, windowHeight - 20);

bg=createSprite((windowWidth-100)/2, (windowHeight-100)/2, windowWidth-100, windowHeight-100);
bg.addImage(bgimg);
bg.velocityY=0

ship=createSprite((windowWidth-1200)/2, (windowHeight-100)/2, 30, 30);
ship.addImage(shipimg);
ship.scale = 0.4;
ship.velocityY=8

base=createSprite(windowWidth/2-600, windowHeight - 30, windowWidth-1200, 10);


}
function draw(){
  background(0);
  if(bg.y>windowHeight){
    bg.y=windowHeight/2;
  }


  if (keyIsDown(LEFT_ARROW)){
    ship.velocityX = -10;
  }
  else  if (keyIsDown(RIGHT_ARROW)){
    ship.velocityX = 10;
  } 
  else{
    ship.velocityX=0;
    ship.velocityY=8;
  }
  
  base.bounceOff(ship);

  var r = Math.round(random(1,6));


if(frameCount%130===0){

  if(r===1){
  a1();
  }
  else if(r===2)
  a2();
  else if(r===3)
  a3();
  else if(r===4)
  a1();
  else if (r===5)
  a2();
  else
  a3();
}
  console.log(r)



  drawSprites();
}
function a1(){
ast1=createSprite(Math.round(random(50, windowWidth-1300)),Math.round(random(100, windowHeight-200)));
ast1.addImage(ast1img);
ast1.scale=0.3;
}

function a2(){
ast2=createSprite(Math.round(random(50, windowWidth-1300)),Math.round(random(100, windowHeight-200)));
ast2.addImage(ast2img);
ast2.scale=0.3;
}
function a3(){
ast3=createSprite(Math.round(random(50, windowWidth-1300)),Math.round(random(100, windowHeight-200)));
ast3.addImage(ast3img);
ast3.scale=0.3;
}

