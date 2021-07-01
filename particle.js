class particle{
    constructor(x,y,r) {
      var options =  {
          restitution : 0.5
      } 
      this.r = r;
      this.body = Bodies.circle(x,y, this.r,options);
      this.color=color(random(0,225), random(0,225), random(o, 255));
      World.add(world, this.body);
    }
    display(){
     var position = this.body.position;
     var angle = this.body.angle;

     push();
     translate(position.x,position.y);
     rotate(angle);
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);
     pop();
    }
}