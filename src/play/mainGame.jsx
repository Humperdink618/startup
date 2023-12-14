import React from 'react';

import { Button } from 'react-bootstrap';
// import { VaderNOButton } from './vaderNOButton';
import { GameEvent, GameNotifier } from './gameNotifier';
import './mainGame.css';

export function MainGame(props) {
  const userName = props.userName;
  const playVader = new Audio(`../74_VADER_NOOO.mp3`);
  
  const [count, setCount] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);

  function getPlayerName() {
    // alert("player name obtained");
    let name = userName;
    // Dummy values which will be taken from the database
    // if you want to save count else intialize to zero 
    // get /count
    // once get a user, might become get /<username>/count
    getCounter(name);
    // get /highscore
    // might be easier to have a highscore per user
    getHighScore(name);
    // set the values in the html
    // document.getElementById("player-name").innerHTML = name;
  }


  async function getCounter(name) {
    let c = 0;
    console.log(name);
    try {
      // Get the latest count from the service
      const response = await fetch(`/api/count/${name}`);
      let cJ = await response.json();
      setCount(cJ[0].count);
      
    } catch {
      console.log("Error when trying to get count");
    }
    
  }
  
  async function postCount(name, newCount) {
    try {
     // alert("in postCount " + newCount);
      const response = await fetch(`/api/count/${name}/` + newCount, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({'newCount' : newCount }),
      });
     
    } catch {
      console.log("Error when trying to post count");
    }
  }
  
  async function getHighScore(name) {
    let h = 0;
   
    try {
    // Get the latest high score from the service
    const response = await fetch(`/api/highscore/${name}`);
    let hjson = await response.json();
    //h = parseInt(hjson.highScore);
    setHighScore(hjson[0].highscore);
      
    } catch {
      console.log("Error when trying to get highscore");
    }
  
  }
  
  async function postHighScore(name, newHighscore) {
    try {
      //alert("before postHighscore " + newHighscore);
      const response = await fetch(`/api/highscore/${name}`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ "newHighscore" : newHighscore}),
      });
      console.log(newHighscore);
      //alert("after postHighscore");
    } catch {
      console.log("Error when trying to post highscore");
    }
  }
  
  function reset() {
    // if want to save count 
    // post /count ?
    postCount(userName, 0);
    setCount(0);
     // Let other players know a new game has started
    GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
  }
  
  function PushNoooButton() {
    let newCount = count + 1;
    setCount(newCount);
    console.log(newCount);
    // increment count 
      // -> if you want this to be save when you log out
    // -> post /count
    postCount(userName, newCount);
    // check if count is greater than high score
    if (newCount > highScore) {
      // if greater than high score, update high score
     updateHighScore(newCount);
     console.log(newCount);
    }
  
    // play sound
    playVader.play();
  }
  
  function updateHighScore(newCount) {
    // update database  -> post to /highscore
    // set high score to count
    postHighScore(userName, newCount);
    setHighScore(newCount);
    console.log(highScore);
    console.log(newCount);
  }

  return (
    
    <div className='custom-container' onLoad={() => getPlayerName()}>
        <div id="picture" className="picture-box-vader">
          <img width="600px" src="Darth_Vader_Noooo_Banner.jpg" 
          alt="https://i.kym-cdn.com/entries/icons/original/000/000/854/Darth_Vader_Noooo_Banner.jpg"/>
      </div>
      <h3>PRESS IN CASE OF DIRE EMERGENCIES!</h3>
      {/* <VaderNOButton /> */}
      <div className="nobutton">
            <img src="button.jpg" alt="NoButton" width='100%'/>
            <button className="btn" onClick={() => PushNoooButton()}></button>
    
        </div>
      
        {/* <label for="high-score">High Score: </label>
        <p id="high-score">0</p> */}
        <p>High Score: </p>
        <p>{highScore}</p>
        <div>
            {/* <label for="count">You pressed the button this many times: </label>
            <p id="count">0</p> */}
            <p>You pressed the button {count} times</p>
        </div>
        <Button variant='primary' onClick={() => reset()}>
            Reset
          </Button>
          </div>
  );
}