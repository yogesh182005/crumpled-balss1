
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var engine;
var ground;
var box1 ,box2,box3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    
	//Create the Bodies Here.
	paper=new Paper(100,400,10);
	ground=new Ground(400,600,800,10);

	box1 = new Box(630,530,20,130);
	box2 = new Box(430,530,20,130);
	box3 = new Box(530,580,200,20);

	
	Engine.run(engine);
  
}


function draw() {
  
  background(25);
  Engine.update(engine);
 ground.display();
 box3.display();
 box1.display();
 box2.display();


  paper.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
	Body.applyForce(paper.body,paper.body.position, {x:85,y:85});
  }
	
}


