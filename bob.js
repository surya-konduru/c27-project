class Bob {
  constructor(x, y, radius) {
    var options = {
      restitution: 1,
      density: 1.2,
      friction: 0.5
    }

    this.radius = radius;
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;

    push();
    ellipseMode(RADIUS);
    fill("deepPink");
    ellipse(pos.x, pos.y, this.radius, this.radius);
    pop();
  }

  setStatic(b) {
    Body.setStatic(this.body, b);
  }
}
