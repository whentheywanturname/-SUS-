
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var itsafloorwow;
var YEEEEET;
var linearalgebrahowfun
var s1, s2, s3 ,s4, s5, s6, s7, s8, s9, sX
var m1, m2, m3 ,m4, m5, m6, m7, m8, m9, mX
function preload()
{
	
}

function setup() {
	createCanvas(3000, 800);
    engine = Engine.create();
	world = engine.world;

    itsafloorwow = new ground(1500,770,3000,75);

	s1 = new squared(900,100,70,70);
	s2 = new squared(900,100,70,70);
	s3= new squared(900,100,70,70);
	s4 = new squared(900,100,70,70);
	s5 = new squared(900,100,70,70);
	s6 = new squared(900,100,70,70);

	s7 = new squared(800,100,70,70);
	s8 = new squared(800,100,70,70);
	s9 = new squared(800,100,70,70);
	sX = new squared(800,100,70,70);
	m1 = new squared(800,100,70,70);
	m2 = new squared(800,100,70,70);

	m3 = new squared(700,100,70,70);
	m4 = new squared(700,100,70,70);
	m5 = new squared(700,100,70,70);
	m6 = new squared(700,100,70,70);
	m7 = new squared(700,100,70,70);
	m8 = new squared(700,100,70,70);
	m9 = new squared(700,100,70,70);
	mX = new squared(700,100,70,70);

	YEEEEET = new poof(200,200,80);

	linearalgebrahowfun = new rope(YEEEEET.body,{x: 500, y: 120});
	Engine.run(engine);
  
}


function draw() {
  background("blue");
  itsafloorwow.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  sX.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  mX.display();
  YEEEEET.display();
  linearalgebrahowfun.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(YEEEEET.body,{x: mouseX, y: mouseY});
}