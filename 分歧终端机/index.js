var randomNumber1 = Math.random() * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);
var randomNumber2 = Math.random() * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);

document
  .querySelector(".img1")
  .setAttribute("src", "dice" + randomNumber1 + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "&#129315; player 1 win! ";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "player 2 win! &#129315;";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
