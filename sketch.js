
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var groundSprite;
var rect1,rect2,rect3;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
  paper = new Paper(100,200,30,30);

  groundSprite=new Ground(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")
  
    rect1 =createSprite(830,450,150,20);
    rect1.shapeColor=color(255);

	  rect2 = new Dustbin (900,400,20,100);
    rect2.shapeColor=color(255);

    rect3 = new Dustbin(760,400,20,100);
	  rect3.shapeColor=color(255);
 
 
	Engine.run(engine);
  
  	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
  paper.display(); 
  groundSprite.display();
  rect1.display();
  rect2.display();
  rect3.display();
 
}
function keyPressed() {
if(keyCode === UP_ARROW){
 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}
}



