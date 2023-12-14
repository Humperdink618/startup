
async function mylogin() {
  /*let username = document.querySelector("#name").value;
  let password = document.querySelector("#password")?.value;
  let passed = true; // true if login is good
  //change passed = true to an api call (/login) with the body 
  try {
    
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

  //window.location.href = "play.html"; */
  loginOrCreate(`/api/auth/login`);
}

async function myCreate() {
  //alert("in my create");
  loginOrCreate(`/api/auth/create`);
   /*let un = document.querySelector("#name").value;
  let pw = document.querySelector("#password").value;
  alert(un);
  alert(pw);
  //let passed = true; // true if login is good
  //change passed = true to an api call (/login) with the body 
  alert("meemah, whatevs I'm tired");
  try {
    alert("logging in");
    const response = await fetch(`/api/auth/create`, {
      method: 'post',
      body: JSON.stringify({ username: un, password: pw }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    
    let passed = true //response.ok;
    alert(response);
    alert("response");
    //let passed = response.json(); // should return a boolean
    if (passed) {
      loginGood(un);
    } else {
      loginFail();
    }
  } catch {
    alert("You SUCK!");
    loginFail();
  } */
}


async function loginOrCreate(endpoint) {
  //alert(endpoint);
  const userName = document.querySelector('#name')?.value;
  const password = document.querySelector('#password')?.value;
  //alert("got username and password.");
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ username: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  //alert(response);


  if (response.ok) {
    alert("login success");
    localStorage.setItem('userName', userName);
    window.location.href = 'play.html';
  } else {
    alert("login failed");
    console.log("bad username or password");
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}
/*
 function loginGood(userName) {
  alert("login success");
  // how you pass the username (probably)
  localStorage.setItem("userName", userName.value);
  window.location.href = "PLAY.HTML";
  //n This opens a new tab with play.html
  // window.open('PLAY.HTML');
 // return false;
}

async function loginFail() {
  alert("login failed");
  console.log("bad username or password");
  const body = await response.json();
  const modalEl = document.querySelector('#msgModal');
  modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
  const msgModal = new bootstrap.Modal(modalEl, {});
  msgModal.show();
}
*/
async function getUser(username) {
  //alert("are we calling this function somewhere?");
  let scores = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${username}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}
