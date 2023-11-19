const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

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
  if (await DB.getUser(req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.username, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:username', async (req, res) => {
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
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// get/post /count
apiRouter.get('/count/:username', async (_req, res) => {
  //counts = 5;
  counts = await DB.getCount(_req.params.username);
  //console.log("Counts " + counts);
  //console.log("Username " + _req.params.username);
  res.send(counts);
  //res.send(JSON.stringify(counts));
});

apiRouter.post('/count/:username/:id', (req, res) => {
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
apiRouter.get('/highscore/:username', async (_req, res) => {
  highscore = await DB.getHighScore(_req.params.username);
  //console.log("High score " + highscore);
  //console.log("Username " + _req.params.username);
  //res.send(JSON.stringify(highscore));
  res.send(highscore);
});

apiRouter.post('/highscore/:username', (req, res) => {

  highscore = parseInt(req.body.newHighscore);
  DB.updateHighscore(req.params.username, highscore);
  console.log("High score " + highscore);
  console.log("Username " + req.params.username);
  res.sendStatus(200);
});

// Helper functions and stored variables:
//let counts = 0; // initial value
//let highscore = 0; // initial value
//let username = ""; // initial value


apiRouter.get('/login', (req, res) => {
  username = String(req.body.username);
  password = String(req.body.password);
  // check password
  console.log("Username " + username);
  console.log("Password " + password);
  res.send(JSON.stringify(true));
  // change to false if it fails. Might want an if() statement
});
/*
// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});


// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
let scores = [];
function updateScores(newScore, scores) {
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 10) {
    scores.length = 10;
  }

  return scores;
}
*/
