
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var trunk
var m1
var m2
var m3
var m4
var m5
var road
var boy
var stone
var chain


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	
	trunk = new tree(550,360,70,70)

   
    
    

	engine = Engine.create();
	world = engine.world;

  road = new Ground(0,700,2000,200,world)
  m1 = new Mango(600,200,20,20, world)
  m2 = new Mango(500,200,20,20,world)
  m3 = new Mango(500,300,20,20,world)
  m4 = new Mango(600,320,20,20,world)
  m5 = new Mango(650,320,20,20,world)
  stone = new Stone(80,475,20,20,world)
  boy = new Boy(130,540,20,20,world)
  chain = new Slingshot(stone.body,{x:80,y:480})
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  trunk.display()
   m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  road.display()
  boy.display()
  stone.display()
  chain.display()

  detectCollision(stone,m1)
  detectCollision(stone,m2)
  detectCollision(stone,m3)
  detectCollision(stone,m4)
  detectCollision(stone,m5)
  


  drawSprites();
 
}

function detectCollision(stoneObj,mangoObj)
{
  var csPosition = stoneObj.body.position
  var cmPosition = mangoObj.body.position 

  var d = dist(csPosition.x,csPosition.y,cmPosition.x,cmPosition.y)

  // there is no object.r so I used 50 for r1 + r2

  // var r1 = stoneObj.r
  // var r2 = mangoObj.body.r

  if(d < 50)
  {
    Matter.Body.setStatic(mangoObj.body,false)

  }

}

  function mouseDragged()
  {
    console.log("Mouse dragged")
      Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }

  function mouseReleased()
  {
    console.log("Mouse release called")
    // Matter.Body.setStatic(stone.body,false)
    chain.fly()
  }


