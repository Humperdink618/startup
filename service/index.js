const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  //console.log("cheese");
  let username = req.body.username;
  let password = req.body.password;
  //console.log(username);
  //console.log(req.body);
  //console.log(password);
  if (await DB.getUser(username)) {
    console.log("user exists!");
    res.status(409).send({ msg: 'Existing user' });
  } else {
    //console.log("create new user");
    const user = await DB.createUser(username, password);
    

    // Set the cookie
    setAuthCookie(res, user.token);
    //console.log("we have cookies!");

    res.send({
      id: user._id,
      success:true
    });
   // console.log("sent");
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  //console.log("get the user");
  const user = await DB.getUser(req.body.username);
  //console.log(req.body.username);
  //console.log(req.body.password);
  //console.log(user);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      //console.log(user.password);
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      //console.log("sent again");
      return;
    }
  }
  console.log("unauthorized");
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:username', async (req, res) => {
  //console.log("please work!");
  const user = await DB.getUser(req.params.username);
  if (user) {
    const token = req?.cookies.token;
    res.send({ username: user.username, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  //console.log("about to call authToken");
  const authToken = req.cookies[authCookieName];
  //console.log("got authToken", authToken);
  const user = await DB.getUserByToken(authToken);
  if (user) {
    //console.log("working probably");
    next();
  } else {
    console.log("unauthorized");
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Default error handler
app.use(function (err, req, res, next) {
  console.log("error");
  res.status(500).send({ type: err.name, message: err.message });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  //console.log("setAuthCookie");
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
  //console.log("cookie set");
}


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);

// get/post /count
secureApiRouter.get('/count/:username', async (_req, res) => {
  //counts = 5;
  counts = await DB.getCount(_req.params.username);
  //console.log("Counts " + counts);
  //console.log("Username " + _req.params.username);
  res.send(counts);
  //res.send(JSON.stringify(counts));
});

secureApiRouter.post('/count/:username/:id', (req, res) => {
  // for front end:  
  // XXXX.post('/count/' + newCount)
  let newCount = parseInt(req.params.id);
  let username = req.params.username;
  DB.updateCount(username, newCount);
  console.log("Counts " + newCount);
  console.log("Username " + username);
  res.sendStatus(200);
});


// get/post /highscore
secureApiRouter.get('/highscore/:username', async (_req, res) => {
  highscore = await DB.getHighScore(_req.params.username);
  //console.log("High score " + highscore);
  //console.log("Username " + _req.params.username);
  //res.send(JSON.stringify(highscore));
  res.send(highscore);
});

secureApiRouter.post('/highscore/:username', (req, res) => {

  highscore = parseInt(req.body.newHighscore);
  DB.updateHighscore(req.params.username, highscore);
  console.log("High score " + highscore);
  console.log("Username " + req.params.username);
  res.sendStatus(200);
});

