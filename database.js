const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('users');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});
async function getCount(username) {
  // assuming usernames are unique, you can fetch a specific document using the username
  const query = {"username": username};
  result = userCollection.find(query);
  //let results = await result.toArray;
  return result.toArray();
}

async function updateCount(username, count) {
  // assuming usernames are unique, you can fetch a specific document using the username
  // once you get it, you can modify it
  const filter = { "username": username };
// update the value of the 'quantity' field to 5
const updateDocument = {
   $set: {
      count: count,
   },
};
const result = await userCollection.updateOne(filter, updateDocument);
}

async function getHighScore(username) {
  // assuming usernames are unique, you can fetch a specific document using the username
  const query = {"username": username};
  result = userCollection.find(query);
  //let results = await result.toArray;
  return result.toArray();
}

async function updateHighscore(username, highscore) {
  // assuming usernames are unique, you can fetch a specific document using the username
  // once you get it, you can modify it
  const filter = { "username": username };
// update the value of the 'quantity' field to 5
const updateDocument = {
   $set: {
      highscore: highscore,
   },
};
const result = await userCollection.updateOne(filter, updateDocument);
}



module.exports = {updateCount, getCount, getHighScore, updateHighscore };
/*
async function addScore(score) {
  const result = await userCollection.insertOne(score);
  return result;
}
//may want to use the MongoDB update console command instead of save or insert.

function getHighScores() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = userCollection.find(query, options);
  return cursor.toArray();
}

module.exports = { addScore, getHighScores };
*/