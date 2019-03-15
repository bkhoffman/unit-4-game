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

  //adding the Crystal images, giving: img tag, class, img src, data and append to html 
  var crystal1 = $("<img>");
  //crystal1.addClass("crystal1-image");
  crystal1.attr("src", "assets/images/crystal1.png");
  //crystal1.attr("data-crystal1value" , crystalNum1);
  $("#crystal1").html(crystal1);

  var crystal2 = $("<img>");
  //crystal2.addClass("crystal2-image");
  crystal2.attr("src", "assets/images/crystal2.png");
  //crystal2.attr("data-crystal1value" , crystalNum2);
  $("#crystal2").html(crystal2);

  var crystal3 = $("<img>");
  //crystal3.addClass("crystal3-image");
  crystal3.attr("src", "assets/images/crystal3.png");
  //crystal3.attr("data-crystal1value" , crystalNum3);
  $("#crystal3").html(crystal3);

  var crystal4 = $("<img>");
  //crystal4.addClass("crystal4-image");
  crystal4.attr("src", "assets/images/crystal4.png");
  //crystal4.attr("data-crystal1value" , crystalNum4);
  $("#crystal4").html(crystal4);
};



// below allows EACH crystal to be clicked and add the random value assign from above to add to the score
// then compare score to random number and trigger win/lose
// and trigger setup fuction to reset the game

$("#crystal1").on("click" , function(){
  // var crystal1Value = ($(this).attr("data-crystal1value"));
  // crystal1Value = parseInt(crystal1Value)
  console.log("score checker", crystalNum1);
  score += crystalNum1;
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
});
$("#crystal2").on("click" , function(){
  // var crystal1Value = ($(this).attr("data-crystal1value"));
  // crystal1Value = parseInt(crystal1Value)
  console.log("score checker", crystalNum2);
  score += crystalNum2;
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
});
$("#crystal3").on("click" , function(){
  // var crystal1Value = ($(this).attr("data-crystal1value"));
  // crystal1Value = parseInt(crystal1Value)
  console.log("score checker", crystalNum3);
  score += crystalNum3;
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
});
$("#crystal4").on("click" , function(){
  // var crystal1Value = ($(this).attr("data-crystal1value"));
  // crystal1Value = parseInt(crystal1Value)
  console.log("score checker", crystalNum4);
  score += crystalNum4;
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
});

setup();

//idea below to condense
// $("#crystals").click(function(){
//   $("#crystal1")
//   $("#crystal2")
//   $("#crystal3")
//   $("#crystal4")
//   score += crystalNum4;
//   $("#scoreBox").html(score);
//   if(score === randomNumber){
//     $("#winLoseBox").html("You Win!")
//     wins++
//     $("#winCount").html(wins);
//     setup();
//   }else if(score > randomNumber){
//     $("#winLoseBox").html("You Lose :(")
//     loses++
//     $("#loseCount").html(loses);
//     setup();
//   }
// });







