class Paper {

constructor(x,y,r,angle,options){
 var options = {  
 isStatic: false,    
 restitution: 0.3,
 friction: 0.5,
 density: 1.2
}
this.body = Bodies.circle(x, y,30, options);
this.radius=r;
World.add(world, this.body);
}    
display(){

    var pos =this.body.position;
    //pos.x = mouseX;
    //pos.y = mouseY;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(3);
    fill("pink");
    ellipse(0, 0, 20,20);
    pop();



}
}