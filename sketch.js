const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3,ground,ball,ballImage,dustbinImage,dustbin;

function preload () {
dustbinImage = loadImage("Dustbin.jpeg")
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
  world = engine.world;
  
  dustbin = createSprite(1470,600,50,50);
  dustbin.addImage(dustbinImage);
  dustbin.scale = 0.5
  
  ground = new Ground(800,690,1600,20)

	wall1 = new Wall(1400,620,20,100);
	wall2 = new Wall(1540,620,20,100);
  wall3 = new Wall(1470,670,150,20);

  ball = new Ball(100,670,50);
	Engine.run(engine);
}


function draw() {
  background(250);
  Engine.update(engine);
  //wall1.display();
  //wall2.display();
  //wall3.display();
  ground.display();
  ball.display();
  drawSprites();
}

function keyPressed () {
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:170,y:-170});
}
}