const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


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
