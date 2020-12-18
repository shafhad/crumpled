
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paperball;
var bin1, bin2, bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	groundSprite = createSprite(750, 680, 1500, 17);
	ground = new Ground(750, 680, 1500, 17);
	groundSprite.shapeColor = "limegreen";

	paperball = new Ball(1000, 660, 30);
	paperball.draw = function() { ellipse(0,0,10,10) };


	bin2Sprite = createSprite(1210, 617, 15, 100);
	bin2 = new Dustbin(1210, 617, 15, 100);
	bin2Sprite.shapeColor = "yellow";

	bin1Sprite = createSprite(1315, 660, 200, 15);
	bin1 = new Dustbin(1315, 660, 200, 15);
	bin1Sprite.shapeColor = "yellow";

	bin3Sprite = createSprite(1420, 617, 15, 100);
	bin3 = new Dustbin(1420, 617, 15, 100);
	bin3Sprite.shapeColor = "yellow";
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  ground.display();
  paperball.display();

 if (keyDown(UP_ARROW)){
  keyPressed();
 }

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body, paperball.position, {x: 85, y: -85})
	}
}