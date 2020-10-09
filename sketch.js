var player,form,game;
var gameState=0;
var wall1,wall2,wall3,wall4;
var database;
var playerCount=0;
var boy
function preload(){



}



function setup() {
 createCanvas(displayWidth,displayHeight)
 database = firebase.database();
 wall1=createSprite(displayWidth/2,displayHeight-80,displayWidth,20) 
 wall2=createSprite(displayWidth,displayHeight/2,20,displayWidth-80) 
 wall3=createSprite(0,displayHeight/2,20,displayHeight) 
 wall4=createSprite(displayWidth/2,0,displayWidth,20) 
 boy=createSprite(200,800,50,50) 
 game = new Game()
 game.start()
 game.getState()
}




function  draw() {
document.body.style.overflow = "hidden";

if(gameState === 1){
  game.start2();
}

if(gameState === 2){
  game.start3();
}

if(gameState === 3){
  clear();
  game.play();
} 
  drawSprites() 
}