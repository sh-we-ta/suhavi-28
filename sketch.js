
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var tree,stone1, boyimg

function preload()
{
	boyimg=loadImage("boy.png")
}



function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

   
	 
	 //boySprite=createSprite()

  //Create the Bodies Here.
  stoneObj=new Stone(200,200)
  
 
   
   mango1=new Mango(50,250,30)
   m1=new Mango(1000,150,25)
   m2=new Mango(1100,150,30)
   m3=new Mango(1050,100,30)
   m4=new Mango(1000,300,45)
   m5=new Mango(1150,265,40)
   m6=new Mango(1200,205,50)
   treeObj=new Tree(1050,580,450,600)
   launcher1=new launcher(stoneObj.body,{x:235,y:420})
   ground= new Ground(width/2,height-10,1300,20)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boyimg ,200,340,200,300);
  treeObj.display();
  stoneObj.display();
  
  mango1.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  stoneObj.display();
  ground.display()
  launcher1.display();
  
  pluckingMango(stoneObj,mango1);
  pluckingMango(stoneObj,m1);
  pluckingMango(stoneObj,m2);
  pluckingMango(stoneObj,m3);
  pluckingMango(stoneObj,m4);
  pluckingMango(stoneObj,m5);
  pluckingMango(stoneObj,m6);
  
 
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher1.fly();
   
}

function keyPressed() {
        if (keyCode === 32) {
          Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
          launcher1.attach(stoneObj.body);
        }
  }
function pluckingMango(s,m){
  
    mangoBodyPosition=m.body.position
    stoneBodyPosition=s.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   
      if(distance<=m.r+s.r){
        //console.log(distance);
        Matter.Body.setStatic(m.body,false);
      }

}