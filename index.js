const express = require('express');
const app = express();

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
apiRouter.get('/count', (_req, res) => {
  console.log("Counts " + counts);
  res.send(JSON.stringify(counts));
});

apiRouter.post('/count/:id', (req, res) => {
  // for front end:  
  // XXXX.post('/count/' + newCount)
  let newCount = parseInt(req.params.id);
  counts = newCount;
  console.log("Counts " + counts);
  res.sendStatus(200);
});


// get/post /highscore
apiRouter.get('/highscore', (_req, res) => {
  console.log("High score " + highscore);
  res.send(JSON.stringify(highscore));
});

apiRouter.post('/highscore', (req, res) => {
  highscore = parseInt(req.body.newHighscore);
  console.log("High score " + highscore);
  res.sendStatus(200);
});

// Helper functions and stored variables:
let counts = 0; // initial value
let highscore = 0; // initial value
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
