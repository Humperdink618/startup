function mylogout() {
  // placeholder for logout information
  // push count number to database
  //alert("logout successful");
  localStorage.setItem("userName", "");
}

//alert("This runs I hope");
function getPlayerName() {
  // alert("player name obtained");
  let name = localStorage.getItem("userName");
  // Dummy values which will be taken from the database
  let counter = 5;
  let highScore = 10;
  // set the values in the html
  document.getElementById("player-name").innerHTML = name;
  document.getElementById("count").innerHTML = counter;
  document.getElementById("high-score").innerHTML = highScore;
}

function reset() {
  document.getElementById("count").innerHTML = 0;
}

function pushNoooButton() {
  let newCount = (+document.getElementById("count").innerHTML) + 1;
  // increment count 
  document.getElementById("count").innerHTML = newCount;
  // check if count is greater than high score
  if (newCount > document.getElementById("high-score").innerHTML) {
   updateHighScore(newCount);
  }
  // if greater than high score, update high score
  // play sound
  playVader();
}

function updateHighScore(newCount) {
  // update database
  // set high score to count
  document.getElementById("high-score").innerHTML = newCount;
}

function playVader() {
  let filename = "74_VADER_NOOO.mp3";
  let sound = loadSound(filename);
  sound.play();
}

function loadSound(filename) {
  return new Audio('assets/' + filename);
}
