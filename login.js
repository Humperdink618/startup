
function mylogin() {
  let username = document.querySelector("#name");
  let password = document.querySelector("#password");
  let passed = true; // true if login is good
  //if (username.localeCompare("") == 0) passed = false;
  //if (password.localeCompare("") == 0) passed = false;
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
