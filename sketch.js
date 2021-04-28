var bgImg;
var cat;

function preload() {
    //load the images hear
bgImg = loadImage("garden.png");
catimg = loadAnimation("cat1.png");
mouseimg1 = loadAnimation("mouse1.png");
catimg2 = loadAnimation("cat2.png","cat3.png","cat4.png");
mouseimg2 = loadAnimation("mouse2.png","mouse3.png","mouse4.png")

    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(600,400,20,20)
cat.addAnimation("catimg",catimg2)
}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.addAnimatoin("mouseTeasing",mouseimg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;
}

}
