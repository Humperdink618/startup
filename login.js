
// Main page
// login in function
// needs to pass username to play.html/js
// does on create take any arguments?
// perhaps pass dummy data of count and high score -> 
// might instead just read from database this using username
// and only pass username to play

//alert("This runs I hope");
function mylogin() {
  // alert("in login");
  let username = document.querySelector("#name");
  // alert("username: " + username.value);
  let password = document.querySelector("#password");
  // alert("password: " + password.value);
  let passed = true; // true if login is good
  if (passed) {
    loginGood(username);
  } else {
    loginFail();
  }
  //window.location.href = "play.html";
}

function loginGood(userName) {
  alert("login success");
  // how you pass the username (probably)
  localStorage.setItem("userName", userName.value);
  window.open('PLAY.HTML');
  return false;
}

function loginFail() {
  alert("login failed");
}
