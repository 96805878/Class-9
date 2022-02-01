var ball;
//Runs once - At the start of the program
function setup() {
  createCanvas(800,600);
  ball = createSprite(400,300,200,200)
  ball.shapeColor="blue";
  
}

function draw() 
{
  background(30);
  if(keyDown("d")){
    ball.x+=5;
  }
  if(keyDown("a")){
    ball.x-=5;
  }
  if(keyDown("w")){
    ball.y-=5;
  }
  if(keyDown("s")){
    ball.y+=5;
  }
  
  
  
  
  drawSprites();

}

/*
rgb : 0 - 255
cmyk - cyan, magenta, yellow, black
*/
