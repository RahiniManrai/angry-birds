class Log{

    constructor(x, y, height, angle){
        var log_option={
        restitution:0.5,
        friction:1,
        density:1
    
        }
        this.log = Bodies.rectangle(x, y, 20, height, log_option);
        this.width=20;
        this.height=height;
        
        Matter.Body.setAngle(this.log, angle)
        World.add(world,this.log);
    
    }
    
    display(){
        push();
        translate(this.log.position.x,this.log.position.y);
        rotate(this.log.angle);
        fill("brown")
        stroke("black")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
    
    }