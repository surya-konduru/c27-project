class Roof {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.roof = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.roof);
      this.width = width;
      this.height = height;
    }
  
    display() {
      var pos = this.roof.position;

      push();
      rectMode(CENTER);
      translate(pos.x, pos.y);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }