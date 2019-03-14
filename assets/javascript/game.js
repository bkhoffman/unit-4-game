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
};
setup();

//adding the Crystal images, giving: img tag, class, 
var crystal = $("<img>");
crystal.addclass("crystals-image");
crystal.attr("src", ".assets/images/crystal1.png");

