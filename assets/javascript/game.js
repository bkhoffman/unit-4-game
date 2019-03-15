var randomNumber;
var wins = 0;
var loses = 0;
var score = 0;
var randomMin = 19;
var randomMax = 120;
var crystalMin = 1;
var crystalMax = 12;
var crystalNum1;
var crystalNum2;
var crystalNum3;
var crystalNum4;


function setup(){
  score = 0;
  randomNumber = Math.floor(Math.random() * (randomMax - randomMin + 1) ) + randomMin;
  console.log(randomNumber)

  crystalNum1 = Math.floor(Math.random() * (crystalMax - crystalMin + 1) ) + crystalMin;
  crystalNum2 = Math.floor(Math.random() * (crystalMax - crystalMin + 1) ) + crystalMin;
  crystalNum3 = Math.floor(Math.random() * (crystalMax - crystalMin + 1) ) + crystalMin;
  crystalNum4 = Math.floor(Math.random() * (crystalMax - crystalMin + 1) ) + crystalMin;
  console.log(crystalNum1)
  console.log(crystalNum2)
  console.log(crystalNum3)
  console.log(crystalNum4)

  document.getElementById("randomNumber").innerText = randomNumber
  document.getElementById("scoreBox").innerText = score

  //adding the Crystal images: img tag and src, push to html 
  var crystal1 = $("<img>");
  crystal1.attr("src", "assets/images/crystal1.png");
  $("#crystal1").html(crystal1);

  var crystal2 = $("<img>");
  crystal2.attr("src", "assets/images/crystal2.png");
  $("#crystal2").html(crystal2);

  var crystal3 = $("<img>");
  crystal3.attr("src", "assets/images/crystal3.png");
  $("#crystal3").html(crystal3);

  var crystal4 = $("<img>");
  crystal4.attr("src", "assets/images/crystal4.png");
  $("#crystal4").html(crystal4);
};
setup();

// below allows EACH crystal to be clicked and add the random value assigned from above, to the score
// then run the checkScore function

$("#crystal1").on("click" , function(){
  console.log("score checker", crystalNum1);
  score += crystalNum1;
  checkScore();
});
$("#crystal2").on("click" , function(){
  console.log("score checker", crystalNum2);
  score += crystalNum2;
  checkScore();
});
$("#crystal3").on("click" , function(){
  console.log("score checker", crystalNum3);
  score += crystalNum3;
  checkScore();
});
$("#crystal4").on("click" , function(){
  console.log("score checker", crystalNum4);
  score += crystalNum4;
  checkScore();
});

// after check win/lose, run setup fuction to reset the game after adding to win/lose count

function checkScore(){
  $("#scoreBox").html(score);
  if(score === randomNumber){
    $("#result").html("You Win!")
    wins++
    $("#winCount").html(wins);
    setup();
  }else if(score > randomNumber){
    $("#result").html("You Lose :(")
    loses++
    $("#loseCount").html(loses);
    setup();
  }
};
  
