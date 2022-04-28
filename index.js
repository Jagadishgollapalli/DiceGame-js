//for first dice
let randomNumberOne = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberOne);

var diceNumberOne = "dice" + randomNumberOne + ".png";

var diceImageOne = "./images/" + diceNumberOne;

var image1 = document
  .querySelector(".img1")
  .setAttribute("src", diceImageOne);

//for second dice

let randomNumberTwo = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberTwo);

var diceNumberTwo = "dice" + randomNumberTwo + ".png";

var diceImageTwo = "./images/" + diceNumberTwo;

var image2 = document
  .querySelector(".img2")
  .setAttribute("src", diceImageTwo);

if (randomNumberOne > randomNumberTwo) {
  document.querySelector("h1").innerHTML = "player 1 wins";
} else if (randomNumberOne < randomNumberTwo) {
  document.querySelector("h1").innerHTML = "player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
