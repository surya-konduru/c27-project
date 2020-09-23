class Rope {
  constructor(bodyA, bodyB, offsetX, offsetY) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      pointB: { x: offsetX, y: offsetY }
    }
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }

  display() {
    var pointa = this.rope.bodyA.position;
    var pointb = this.rope.bodyB.position;

    strokeWeight(4);
    line(pointa.x, pointa.y, pointb.x + this.offsetX, pointb.y + this.offsetY);
  }
}
