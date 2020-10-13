var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="yellow";
  movingRect=createSprite(400,400,50,50);
  movingRect.shapeColor="yellow";

  gameObject1=createSprite(100, 100, 50, 50);
  gameObject1.shapeColor="yellow";
  gameObject2=createSprite(200, 100, 50, 50);
  gameObject2.shapeColor="yellow";
  gameObject3=createSprite(300, 100, 50, 50);
  gameObject3.shapeColor="yellow";
  gameObject4=createSprite(400, 100, 50, 50);
  gameObject4.shapeColor="yellow";

  
  
}

function draw() {
  background(0);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);

  if(touchingItIs(movingRect,gameObject1)){
    gameObject1.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else {
    gameObject1.shapeColor="yellow";
    movingRect.shapeColor="yellow";
  }
  
  drawSprites();
}
function touchingItIs(obj1,obj2){
  if (obj1.x-obj2.x<=obj2.width/2+obj1.width/2
    && obj2.x-obj1.x<=obj2.width/2+obj1.width/2
    && obj1.y-obj2.y<=obj2.height/2+obj1.height/2
    && obj2.y-obj1.y<=obj2.height/2+obj1.height/2
    ){
    
    return true;
  } else {
  
    return false;
  }
}
