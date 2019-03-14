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

  //adding the Crystal images, giving: img tag, class, img src, data and append to html 
  var crystal1 = $("<img>");
  crystal1.addClass("crystal1-image");
  crystal1.attr("src" , "../images/crystal1.png");
  crystal1.attr("data-crystal1value" , crystalNum1);
  $("crystals").append(crystal1);

  $("crystal1-image").click(function(){
    var crystal1Value = ($(this).attr("data-crystal1value"));
    crystal1Value = parseInt(crystal1Value)
  });

  score += crystal1Value;

};
setup();


