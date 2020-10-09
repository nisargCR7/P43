class Game {
constructor(){
 
    }


    getState(){
        var gameStateRef  = database.ref("players/player"+player.index);
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    



    async start(){
        form = new Form()
        if(gameState === 0){
        form.display();
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
    
}

}


start2(){
if(gameState === 1){

form.display2()


}

}

start3(){
    if(gameState === 2){
    
    form.display3()
    
    
    }
    
    }



play(){
background('pink')
form.hide();
form.title.hide()
form.playbut.hide()



    if(keyDown(RIGHT_ARROW)){
    
      Pressed(10,0)
    }
    
    else if(keyDown(LEFT_ARROW)){
    
      Pressed(-10,0)
    }
drawSprites()

}






}
function Pressed(x,y){

  boy.x=boy.x+x
  boy.y=boy.y+y



}