class Form {

    constructor() {
     
      var col = color(25, 23, 200, 50);
      
      this.how = createElement('h2');
      this.how.html("How To Play");
      this.how.position(displayHeight/2+300, 50);
      this.how.style('background-color', col);
      this.how.style('color', 'blue');
      this.how.style('font-size','100px');

      this.next = createButton('Next')
      this.next.size(100,30);
      this.next.style('font-size','20px');
      this.next.style('background-color', col);
      this.next.position(displayWidth/2-100, displayHeight - 300);
  

      this.title = createElement('h2');
      this.title.html("Corona  warriors");
      this.title.position(displayHeight/2+100, 50);
      this.title.style('background-color', col);
      this.title.style('color', 'red');
      this.title.style('font-size','100px');
      
      this.input = createInput("Name");
      this.input.style('font-size','35px');
      this.input.size(300,30);
      this.input.style('background-color', col);
      this.input.position(displayWidth/2 - 200 , displayHeight/2 - 400);
  
      this.button = createButton('Play');
      this.button.size(100,30);
      this.button.style('font-size','20px');
      this.button.style('background-color', col);
      this.button.position(displayWidth/2 + 30, displayHeight/2 - 300);
  
      this.greeting = createElement('h2');
      this.greeting.style('font-size','75px');
      
      this.playbut = createButton('Play')
      this.playbut.size(100,30);
      this.playbut.style('font-size','20px');
      this.playbut.style('background-color', col);
      this.playbut.position(displayWidth/2-100, displayHeight/2 - 100);
  
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.how.hide();
      this.next.hide()
    }
  
show(){

  this.greeting.show();
  this.button.show();
  this.input.show();
  


}


    display(){
    background('pink')
    this.hide()
    this.playbut.mousePressed(()=>{
    playerCount+=1;
    gameState+=1;
    player.index = playerCount;
    player.update2(gameState)
    player.updateCount(playerCount);

  })
    }
  
    display2(){
    this.title.hide()
    this.playbut.hide()
    this.how.show();
    this.next.show();
    
    this.next.mousePressed(()=>{
      gameState+=1;
      player.update2(gameState)
  
  
    })
    }
  
display3(){
  this.next.hide();
  this.how.hide()
  this.show();
  
  this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    gameState+=1;
    player.name = this.input.value();
    player.index = playerCount;
    player.update()
    player.updateCount(playerCount);
    this.greeting.html("Hello " + player.name)
    this.greeting.position(displayWidth/2 - 200, displayHeight/4+200);
  });


}



  
  }
  