var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  var car = createSprite(50,80,70,50);
  var wall = createSprite(1500,80,30,80);
  car.shapecolor="orange";
wall.shapecolor="orange";
  

  
 

}










function draw() {
  
  background(0);
  
  speed= random(55,90);
  weight=random(400,1500);
  car.velocityX=random(-1,7);

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  }
  else if(deformation>180)
  {
  car.shapecolor=color(255,0,0);
  }
  else if(deformation<180 && deformation>100)
  {
    car.shapecolor=color(230,230,0);
  }
  else if(deformation<100)
  {
    car.shapecolor=color(0,255,0);
  }
 
  drawSprites();
}