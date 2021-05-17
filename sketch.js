


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var plinkos=[];

function preload()
{
	
}

function setup() {
	createCanvas(1000,1000);

	engine = Engine.create();
	world = engine.world;
point=new ground(90,90,0,0);

hero1=new hero(90,200,300,100);

ground1=new ground(250,400,650,5);
ground2=new ground(650,300,100,5);

chain1=new chain(hero1.body,point.body);

enemy1=new enemy(650,50,200,200);

box1=new box(420,380,40,40);
box2=new box(420,360,40,40);
box3=new box(420,340,40,40);
/*box4=new box(420,320,40,40);
box5=new box(420,300,40,40);
/*box6=new box(420,280,40,40);
box7=new box(420,260,40,40);
box8=new box(420,240,40,40);
box9=new box(420,220,40,40);*/

box10=new box(450,380,40,40);
box11=new box(450,360,40,40);
box12=new box(450,340,40,40);
box13=new box(450,320,40,40);
/*box14=new box(300,320,40,40);
box15=new box(450,280,40,40);
box16=new box(450,260,40,40);*/

box17=new box(480,380,40,40);
box18=new box(480,360,40,40);
box19=new box(480,340,40,40);
box20=new box(480,320,40,40);
box21=new box(480,300,40,40);
/*box22=new box(480,280,40,40);
box23=new box(480,260,40,40);
box24=new box(480,240,40,40);*/

box25=new box(510,380,40,40);
box26=new box(510,360,40,40);
box27=new box(510,340,40,40);
box28=new box(510,320,40,40);
/*box29=new box(510,300,40,40);
box30=new box(510,280,40,40);
box31=new box(510,260,40,40);
box32=new box(510,240,40,40);
box33=new box(510,220,40,40);*/


	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
	Engine.update(engine);

box1.display();
box2.display();
box3.display();
/*box4.display();
box5.display();
/*box6.display();
box7.display();
box8.display();
box9.display();*/

box10.display();
box11.display();
box12.display();
box13.display();
/*box14.display();
box15.display();
box16.display();*/

box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
/*box22.display();
box23.display();
box24.display();*/

box25.display();
box26.display();
box27.display();
box28.display();
/*box29.display();
box30.display();*/

hero1.display();
ground1.display();
//ground2.display();
point.display();
enemy1.display();

chain1.display();

if(mouseIsPressed){
	Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY});
} 

}
