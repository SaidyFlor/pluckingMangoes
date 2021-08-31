
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var boy,tree;
var engine,world;
var mango1;
var mango2;
var mango3, mango4, mango5, mango6, mango7;
var stone;
var slingShot;

function preload()
{
	boy=loadImage("boy.png");
	tree=loadImage("tree.png");
	
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new Mango(1000,140,30);
	mango2=new Mango(1170,200,30);
	mango3=new Mango(999,230,30);
	mango4=new Mango(1050,300,30);
	mango5=new Mango(910,277,30);
	mango6=new Mango(1215,310,30);
	mango7=new Mango(1120,250,30);
	stone=new Stone(200,480,20)

	slingShot = new Slingshot(stone.body,{x:230,y:480});


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
		
		Engine.run(engine);
	  Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  image(tree, 800,70,450,550);
  image(boy, 200,400,150,250)

  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  slingShot.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  drawSprites();
 
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.radius){
		 
		Matter.Body.setStatic(lmango.body,false)
	}

}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	slingShot.fly();
  } 



