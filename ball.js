class Ball {
    constructor (x,y,radius) {
    var options = {
        isStatic : false,
        restituion : 0.3,
        friction : 0.5,
        density : 1.2
    }
    this.body = Bodies.circle(x,y,radius/2,options);
    this.radius = radius;
    this.image = loadImage("Paper.png")
    World.add(world,this.body);
    }


    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(255,192,203);
        ellipse(0, 0, this.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, 70, 70);
        pop();
    }
}