
function setup() {
  createCanvas(400,400);
  background(51);
  bost = createSprite(200,200,30,30);

}

function draw() 
{

  if (keyIsDown(RIGHT_ARROW)){
    background("red");
    bost.shapeColor = "yellow";
    bost.x = bost.x+5;
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    bost.shapeColor = "green";
    bost.x = bost.x-5;
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    bost.shapeColor = "red";
    bost.y = bost.y-5;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    bost.shapeColor = "blue";
    bost.y = bost.y+5;
  }


  
  drawSprites();
}

