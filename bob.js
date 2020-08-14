class Bob {
  constructor(x, y, radius) {
    var options = {
      isStatic: true,
      restitution: 0.3,
      density: 5
    }
    this.radius = radius;
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;

    push();
    ellipseMode(CENTER);
    translate(pos.x, pos.y);
    fill("deepPink");
    ellipse(pos.x, pos.y, this.radius, this.radius);
    pop();
  }

  setStatic(b) {
    Body.setStatic(this.body, b);
  }

//     console  jump() {
// .log("jumping");
//     Bdy.applyForce(this.body, this.body.position, { x: 285, y: 210 });
//   }
}
