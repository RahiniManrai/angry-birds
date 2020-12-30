class Bird{

    constructor(x, y){
        var bird_option={
        restitution:0.5,
        friction:0.3,
        density:1.5
    
        }
        this.bird = Bodies.circle(x, y, 50, bird_option);
        this.width=50;
        this.height=50;
        
    
        World.add(world,this.bird);
    
    }
    
    display(){
        this.bird.position.x=mouseX;
        this.bird.position.y=mouseY;
        push();
        translate(this.bird.position.x,this.bird.position.y);
        rotate(this.bird.angle);
        fill("red")
        stroke("black")
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
    
    }