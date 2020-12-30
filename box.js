class Box{

constructor(x, y, width, height){
    var box_option={
    restitution:0.5,
    friction:0.3,
    density:1

    }
    this.box = Bodies.rectangle(x, y, width, height, box_option);
    this.width=width;
    this.height=height;
    

    World.add(world,this.box);

}

display(){
    push();
    translate(this.box.position.x,this.box.position.y);
    rotate(this.box.angle);
    fill("brown")
    stroke("black")
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
}

}