class Ground{

constructor(){

    var ground_options ={
        isStatic: true
    }

   this.ground = Bodies.rectangle(600, 590, 1200, 20, ground_options);
    World.add(world,this.ground);


}

display(){
fill("green");
rectMode(CENTER);
rect(this.ground.position.x,this.ground.position.y,1200,20);
    


}



}