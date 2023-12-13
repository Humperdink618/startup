import React from 'react';

import { Button } from 'react-bootstrap';
import { VaderNOButton } from './vaderNOButton';
import { GameEvent, GameNotifier } from './gameNotifier';
import './mainGame.css';

export function MainGame(props) {
  const userName = props.userName;

  return (
    
    <div className='custom-container'>
        <div id="picture" className="picture-box-vader">
          <img width="600px" src="Darth_Vader_Noooo_Banner.jpg" 
          alt="https://i.kym-cdn.com/entries/icons/original/000/000/854/Darth_Vader_Noooo_Banner.jpg"/>
      </div>
      <h3>PRESS IN CASE OF DIRE EMERGENCIES!</h3>
      <VaderNOButton />
      
        <label for="high-score">High Score: </label>
        <p id="high-score">0</p>
        <div>
            <label for="count">You pressed the button this many times: </label>
            <p id="count">0</p>
        </div>
        <Button variant='primary' onClick={() => reset()}>
            Reset
          </Button>
          </div>
  );
}