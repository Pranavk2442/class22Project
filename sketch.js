var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var star_options;
var ground;
var choice;
var choice2;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 700);

	 fairyVoice.play();

choice=false;
				

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
	
	
	 


	star_options={
			
		restitution:0.5,
		isStatic:true
	}
	starBody = Bodies.circle(650 , 100 , 20 , star_options);
	World.add(world, starBody);
	//starBody.
	


	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x=starBody.position.x;
star.y=starBody.position.y;

  Engine.update(engine);

  if(star.y>470 && starBody.position.y>470){
	  Matter.Body.setStatic(starBody,true);
  }





keyPressed();

 drawSprites();

 

}

function keyPressed() {
	//write code here

	if(keyDown("right_arrow")){
		fairy.x=fairy.x+5;
	}

	if(keyDown("left_arrow")){
		fairy.x=fairy.x-5;
	}

	if(keyDown("down_arrow")){
		
Matter.Body.setStatic(starBody,false);

	  
	}
}




