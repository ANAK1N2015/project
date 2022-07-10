var plataforma;
var color=rgb(0, 255, 58) 
function setup() {
  createCanvas(400,400);
   plataforma=createSprite(200,200,10,10);
  // plataforma.shapeColor="#00FF3A";
  plataforma.shapeColor=rgb(0, 255, 58) ;
}

function draw() 
{
  background(30);
drawSprites();
}




