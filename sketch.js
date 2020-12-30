const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

   ground=new Ground(); 
   box1=new Box(700, 500, 70, 70);
  box2=new Box(900, 500, 70, 70); 
  pig1=new Pig(800, 500);
  log1=new Log(800, 480, 270, PI/2);
  box3=new Box(700, 460, 70, 70);
  box4=new Box(900, 460, 70, 70); 
  pig2=new Pig(800, 460);
  log2=new Log(800, 440, 270, PI/2);
  box5=new Box(800, 400, 60, 60)
  log3=new Log(850, 410, 150, -PI/7);
  log4=new Log(750, 410, 150, PI/7);
  bird=new Bird(100, 200)

    
}

function draw(){
    background("blue");
    Engine.update(engine);
    ground.display();
   box1.display();
   box2.display();
   pig1.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   box5.display();
   log3.display();
   log4.display();
   bird.display();
   
}
