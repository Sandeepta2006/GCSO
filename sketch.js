var car,wall;
var speed,weight,deformation;


function setup() {
  createCanvas(1600,400);

speed=random(55,100);
weight=random(350,1400);

  car=createSprite(400, 200, 50, 50);
  car.velocityX=speed;

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(252,252,252);
}

function draw() {
  background(0);  

if(wall.x-car.x<(car.width+wall.width)/2){

  car.velocityX=0;
  deformation=0.5*weight*speed*speed/22500;

if(deformation<100){
  car.shapeColor=color(0,255,0);
}

if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
}

if(deformation>180){
  car.shapeColor=color(255,0,0);
}

}

  drawSprites();
}