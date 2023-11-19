
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
    const response = await fetch(`/api/auth/login`, {
      method: 'post',
      body: JSON.stringify({ username: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    let passed = response.ok;
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

async function create() {
  let username = document.querySelector("#name");
  let password = document.querySelector("#password");
  let passed = true; // true if login is good
  //change passed = true to an api call (/login) with the body 
  try {
    const response = await fetch(`/api/auth/create`, {
      method: 'post',
      body: JSON.stringify({ username: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    
    let passed = response.ok;
    
    //let passed = response.json(); // should return a boolean
    if (passed) {
      loginGood(username);
    } else {
      loginFail();
    }
  } catch {
    loginFail();
  }
}

async function loginGood(userName) {
  //alert("login success");
  // how you pass the username (probably)
  localStorage.setItem("userName", userName.value);
  window.location.href = "PLAY.HTML";
  //n This opens a new tab with play.html
  // window.open('PLAY.HTML');
  return false;
}

async function loginFail() {
  //alert("login failed");
  console.log("bad username or password");
  const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
}

async function getUser(username) {
  let scores = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${username}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}
