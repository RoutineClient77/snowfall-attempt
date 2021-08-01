

var bg;
var snowGroup, snowImage;




function setup() {
  createCanvas(1600,800);
  // createSprite(400, 200, 50, 50);
  bg = loadImage("snow3.jpg");

  snowGroup = new Group();
}



function draw() {
  background(bg);
  spawnSnow();
  drawSprites();
}
function spawnSnow() {
 
  if (frameCount % 60 === 0) {
    var snow = createSprite(width+20,height-300,40,10);
    snow.x = Math.round(random(100,220));
    snow.addImage(snow);
    snow.scale = 0.5;
    snow.velocityY = 3;
    
     
    snow.lifetime = 300;
    
    snow.depth = bg.depth+1;
    
    
    
  
    snowGroup.add(snow);
  }
}