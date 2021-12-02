
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic:false,
	restitution:0.4,
	frictionAir:0.1,
	density:1.2
	}
  ball=  Bodies.circle(120,30,10,options)
World.add(world,ball)
	Engine.run(engine);
	ground=new Ground(width/2,530,width,20);
	leftSide=new Ground(700,460,10,100);
	rightSide=new Ground(900,460,10,100);
}


function draw() {
 
  background(0);
Engine.update(engine)
rectMode(CENTER)
  drawSprites();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10)
  ground.show();
  leftSide.show();
  rightSide.show();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:75,y:-40})
	}
}

