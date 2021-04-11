const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var monster;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,600);
    //monster = createSprite(900,200,55)
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(100,200,55)

    monster = new Monster(800,200,55)

    ground = new Ground(600,500,1200,20);

    box1 = new Box(420,500,50,50);
    box2 = new Box(420,450,50,50);
    box3 = new Box(420,400,50,50);
    box4 = new Box(420,350,50,50);
    box5 = new Box(420,300,50,50);

    box6 = new Box(440,500,50,50);
    box7 = new Box(440,450,50,50);
    box8 = new Box(440,400,50,50);
    box9 = new Box(440,350,50,50);
    box10 = new Box(440,300,50,50);

    box11 = new Box(460,500,50,50);
    box12 = new Box(460,450,50,50);
    box13 = new Box(460,400,50,50);
    box14 = new Box(460,350,50,50);
    box15 = new Box(460,300,50,50);
    
    rope = new Rope(ball.body, {x:50, y:200});
}

function draw(){
    background(200)
    Engine.update(engine);

    ball.display();

    monster.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    ground.display();
    
    rope.display();   
    
    //drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}