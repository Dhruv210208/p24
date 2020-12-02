const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
function setup(){
    var canvas = createCanvas(700,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,700,20,ground_options);
    World.add(world,ground);
var ballOption={
    restitution:0.1
}

   ball=Bodies.circle(100,100,40,ballOption);
   World.add(world,ball);



    console.log(ground);

    console.log(ball);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1000,20);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,40,40);
keyPressed()
drawSprites()
}

function keyPressed() {
  
    if(keyCode === UP_ARROW){
ball.Body.applyForce(ball.Body,ball.Body.position,{x:300,y:-300})    

    
    
    }
    }