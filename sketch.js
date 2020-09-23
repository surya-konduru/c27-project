
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
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof(400, 100, 800, 30);

  bob1 = new Bob(325, 400, 15);
  bob2 = new Bob(345, 400, 15);
  bob3 = new Bob(365, 400, 15);
  bob4 = new Bob(385, 400, 15);
  bob5 = new Bob(405, 400, 15);

  rope1 = new Rope(bob1.body, roof.body, -50 * 2, 15);
  rope2 = new Rope(bob2.body, roof.body, -50 * 1.5, 15);
  rope3 = new Rope(bob3.body, roof.body, -50 * 1, 15);
  rope4 = new Rope(bob4.body, roof.body, -50 * 0.5, 15);
  rope5 = new Rope(bob5.body, roof.body, -50 * 0, 15);

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

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Body.applyForce(bob1.body, bob1.body.position, { x: -20, y: -20 });
  }
}
