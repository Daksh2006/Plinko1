class Plinko{
  constructor(x,y,width) {
      var options = {
          restitution:0.1,
          isStatic:true 
      }
      this.body = Bodies.circle(x,y,width,options);
      World.add(world, this.body);
      this.radius = radius;
      this.width = width;
    }
    display(){
      var pos;
      pos = this.body.position;
      ellipse(pos.x,pos.y,this.radius,this.radius);
    }
  }
