
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(150, 30, 600, 15);
	
	bob1 = new Bob(120, 150, 30);
	bob2 = new Bob(135, 150, 30);
	bob3 = new Bob(150, 150, 30);
	bob4 = new Bob(165, 150, 30);
	bob5 = new Bob(180, 150, 30);
	
	rope1 = new Rope(bob1.body, roof.body, 120, 30);
	rope2 = new Rope(bob2.body, roof.body, 135, 30);
	rope3 = new Rope(bob3.body, roof.body, 150, 30);
	rope4 = new Rope(bob4.body, roof.body, 165, 30);
	rope5 = new Rope(bob5.body, roof.body, 180, 30);

	Engine.run(engine);
  
	}


function draw() {
  background("lightSkyBLue");
  Engine.update(engine);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  			
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyWentDown("up")){
	  rope1.up();
	  bob2.setStatic(false);
	  bob3.setStatic(false);
	  bob4.setStatic(false);
	  bob5.setStatic(false);
  }
  
  drawSprites();

}

  
 




