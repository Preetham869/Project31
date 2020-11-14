const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  
  createCanvas(800,700);
 
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(width/2,height,width,20);
 
 for(var k = 3; k <= width; k = k + 132) {

  divisions.push(new Division(k,590,10,200))

  }

 for(var j = 40; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));    
  
    }
 for(var j = 60; j <= width - 10; j = j + 50) {

      plinkos.push(new Plinko(j,175));    
  
   }

   for(var j = 35; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j,275));    

 }

 for(var j = 50; j <= width - 10; j = j + 50) {

  plinkos.push(new Plinko(j,375));    

}

}

function draw() {
  background("black");  
  
  Engine.update(engine);

 ground.display();

 for(var i = 0; i < plinkos.length; i++) {

  plinkos[i].display();

 }  

 if(frameCount % 60 === 0 ){

  particles.push(new Particle(random(width/2 - 30 ,width/2 + 30 ), 10,10));
  
   } 
  
   for(var j = 0; j < particles.length; j++) {

     particles[j].display();

   }  

  for (var k = 0; k < divisions.length; k++) {

     divisions[k].display();

  }

 
  
}
