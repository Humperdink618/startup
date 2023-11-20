function mylogout() {
  // placeholder for logout information
  // push count number to database
  //postCount(document.getElementById("count").innerHTML);
  //postHighScore(document.getElementById("high-score").innerHTML)
  //alert("logout successful");
  //localStorage.setItem("userName", "");
  localStorage.removeItem('userName');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

//alert("This runs I hope");
function getPlayerName() {
  // alert("player name obtained");
  let name = localStorage.getItem("userName");
  // Dummy values which will be taken from the database
  // if you want to save count else intialize to zero 
  // get /count
  // once get a user, might become get /<username>/count
  getCounter(name);
  // get /highscore
  // might be easier to have a highscore per user
  getHighScore(name);
  // set the values in the html
  document.getElementById("player-name").innerHTML = name;

}

async function getCounter(name) {
  let c = 0;
  try {
    // Get the latest count from the service
    const response = await fetch(`/api/count/${name}`);
    c = await response.json();
    document.getElementById("count").innerHTML = c[0].count;
  } catch {
    console.log("Error when trying to get count");
  }
  
}

async function postCount(name, newCount) {
  try {
   // alert("in postCount " + newCount);
    const response = await fetch(`/api/count/${name}/` + newCount, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({'newCount' : newCount }),
    });
   
  } catch {
    console.log("Error when trying to post count");
  }
}

async function getHighScore(name) {
  let h = 0;
  try {
    // Get the latest high score from the service
    const response = await fetch(`/api/highscore/${name}`);
    hjson = await response.json();
    //h = parseInt(hjson.highScore);
    document.getElementById("high-score").innerHTML = hjson[0].highscore;
  } catch {
    console.log("Error when trying to get highscore");
  }

}

async function postHighScore(name, newHighscore) {
  try {
    //alert("before postHighscore " + newHighscore);
    const response = await fetch(`/api/highscore/${name}`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ "newHighscore" : newHighscore}),
    });
    //alert("after postHighscore");
  } catch {
    console.log("Error when trying to post highscore");
  }
}

function reset() {
  // if want to save count 
  // post /count ?
  postCount(localStorage.getItem("userName"), 0);
  document.getElementById("count").innerHTML = 0;
}

function pushNoooButton() {
  let newCount = (+document.getElementById("count").innerHTML) + 1;
  // increment count 
  document.getElementById("count").innerHTML = newCount;
    // -> if you want this to be save when you log out
  // -> post /count
  postCount(localStorage.getItem("userName"), newCount);
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
  postHighScore(localStorage.getItem("userName"), newCount);
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
