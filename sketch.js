//var ball1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground1,ball1;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1 = new Ball(100,550,20)



 
 ground1 = new Ground(1000,650,2000,20);

 box1 = new Box(1100,555,20,200);

 box2 = new Box(900,555,20,200);

 box3 = new Box(1000,650,200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
 // ellipseMode(RADIUS)
  //fill("pink")
 // ellipse(ball1.position.x,ball1.position.y,20)

  ground1.display();
ball1.display();
 box1.display();
 box2.display();
 box3.display();



 //keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
		
	}
}



