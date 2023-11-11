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
  // if you want to save count else intialize to zero 
  // get /count
  // once get a user, might become get /<username>/count
  let counter = getCounter();
  // get /highscore
  // might be easier to have a highscore per user
  let highScore = 10;
  // set the values in the html
  document.getElementById("player-name").innerHTML = name;
  document.getElementById("count").innerHTML = counter;
  document.getElementById("high-score").innerHTML = highScore;
}

async function getCounter() {
  let c = 0;
  try {
    // Get the latest count from the service
    const response = await fetch('/api/count');
    c = await response.json();

  } catch {
    console.log("Error when trying to get count");
  }
  return c;
}

async function postCount(newCount) {
  try {
    const response = await fetch('/api/count' + newCount, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newCount),
    });
  } catch {
    console.log("Error when trying to post count");
  }
}

async function getHighScore() {
  let h = 0;
  try {
    // Get the latest high score from the service
    const response = await fetch('/api/highscore');
    hjson = await response.json();
    h = parseInt(hjson.highScore);

  } catch {
    console.log("Error when trying to get highscore");
  }
  return h;
}

async function postHighScore(newHighscore) {
  try {
    const response = await fetch('/api/highscore', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newHighscore),
    });
  } catch {
    console.log("Error when trying to post highscore");
  }
}

function reset() {
  // if want to save count 
  // post /count ?
  postCount(0);
  document.getElementById("count").innerHTML = 0;
}

function pushNoooButton() {
  let newCount = (+document.getElementById("count").innerHTML) + 1;
  // increment count 
  document.getElementById("count").innerHTML = newCount;
    // -> if you want this to be save when you log out
  // -> post /count
  postCount(newCount);
  // check if count is greater than high score
  if (newCount > document.getElementById("high-score").innerHTML) {
    // if greater than high score, update high score
   updateHighScore(newCount);
  }

  // play sound
  playVader();
}

function updateHighScore(newCount) {
  // update database  -> post to /highscore
  // set high score to count
  postHighScore(newCount);
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
