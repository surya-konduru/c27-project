class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: offsetX, y: offsetY},
            // stiffness: 1
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        
        var pointa = this.rope.bodyA.position;
        var pointb = this.rope.pointB;
    
        strokeWeight(4);
        line(pointa.x*2, pointa.y*2, pointb.x*2, pointb.y*2);
    }

    up(){
        Body.setPosition(this.rope.bodyA, {x: 0, y: 30});
        Body.setStatic(this.rope.bodyA, false);  
    }
}

