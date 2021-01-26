class Paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.2,
          'friction':0.3,
          'density':1.0,
          isStatic:false
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = 2*r;
     
      
      World.add(world, this.body);
    }
    display(){
    //   var pos =this.body.position;
       var pos =this.body.position;
      
       var angle = this.body.angle;
      
       translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill(255);
      ellipse(0,0, this.r,this.r);
      
    }
  }
  