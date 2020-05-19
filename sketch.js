var car,car1,car2,wall,wall1,wall2;
var speed,weight;
function setup() {
  createCanvas(1600,800);
  
  wall=createSprite(1500,200,60,200);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="blue";
 
  
  wall1=createSprite(1500,450,60,200);
  car1=createSprite(50, 450, 50, 50);
  car1.shapeColor="blue";

  wall2=createSprite(1500,700,60,200);
  car2=createSprite(50, 700, 50, 50);
  car2.shapeColor="white";

  

  speed=random(55,90);
  weight=random(400,1500);
  
  speed0=random(70,110);
  weight0=random(500,1600);

 speed1=random(80,120);
  weight1=random(600,1700);
  
}

function draw() {
  background(0,0,0);

 car.velocityX=speed;
 car1.velocityX=speed0;
 car2.velocityX=speed1;
 

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;

  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
 } 
 if(wall1.x-car1.x < (car1.width+wall1.width)/2)
{
  car1.velocityX=0;
  var deformation=0.5*weight0*speed0*speed0/22500;

  if(deformation>180)
  {
    car1.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car1.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car1.shapeColor=color(0,255,0);
  }
 } 
 if(wall2.x-car2.x < (car2.width+wall2.width)/2)
 {
   car2.velocityX=0;
   var deformation=0.5*weight1*speed1*speed1/22500;
 
   if(deformation>180)
   {
     car2.shapeColor=color(255,0,0);
   }
   if(deformation<180 && deformation>100)
   {
     car2.shapeColor=color(230,230,0);
   }
   if(deformation<100)
   {
     car2.shapeColor=color(0,255,0);
   }
  } 
 drawSprites();
}

