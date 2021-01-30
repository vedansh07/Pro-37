var canva;
var gameState = 0;
var contestantCount;
var database;
var quiz;
var question;
var contestant;
var allcontestants;

function setup(){
  canvas = createCanvas(850,400);

  quiz=new Quiz();

  quiz.getState();
  quiz.start();

  database = firebase.databse();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
}
}
