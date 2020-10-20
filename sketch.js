var groundSprite;   
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
  world = engine.world;
  
  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)  

 holder1=new Holder(870,450,200,20);
 holder2=new Holder(760,410,20,100);
 holder3=new Holder(970,410,20,100);


var ball_options={
   isStatic:true,
   restitution:0.3,
   friction:0.5,
   density:1.2
 }
 
 
 Matter.Bodies.circle(100,400,10,ball_options);
 
 ground = Bodies.rectangle(900, 400, width, 10 , {isStatic:false} );
 World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);

   background(0);


  holder1.display();
  holder2.display();
  holder3.display();


  drawSprites();
 
}



