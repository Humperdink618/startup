
async function mylogin() {
  let username = document.querySelector("#name");
  let password = document.querySelector("#password");
  let passed = true; // true if login is good
  //change passed = true to an api call (/login) with the body 
  try {
    //alert("before postHighscore " + newHighscore);
    /*const response = await fetch('/api/login', {
      method: 'GET',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ "username" : username, "password": password}),
    });
    */
    //alert("after postHighscore");
    let passed = true;
    //let passed = response.json(); // should return a boolean
    if (passed) {
      loginGood(username);
    } else {
      loginFail();
    }
  } catch {
    loginFail();
  }
  //if (username.localeCompare("") == 0) passed = false;
  //if (password.localeCompare("") == 0) passed = false;

  //window.location.href = "play.html";
}

function loginGood(userName) {
  //alert("login success");
  // how you pass the username (probably)
  localStorage.setItem("userName", userName.value);
  window.location.href = "PLAY.HTML";
  //n This opens a new tab with play.html
  // window.open('PLAY.HTML');
  return false;
}

function loginFail() {
  //alert("login failed");
  console.log("bad username or password");
}
