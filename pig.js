class Pig{

    constructor(x, y){
        var pig_option={
        restitution:0.5,
        friction:0.3,
        density:1
    
        }
        this.pig = Bodies.rectangle(x, y, 50, 50, pig_option);
        this.width=50;
        this.height=50;
        
    
        World.add(world,this.pig);
    
    }
    
    display(){
        push();
        translate(this.pig.position.x,this.pig.position.y);
        rotate(this.pig.angle);
        fill("green")
        stroke("black")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
    
    }