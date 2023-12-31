import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GameEvent, GameNotifier } from '../play/gameNotifier';
import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const userName = props.userName;
  const navigate = useNavigate();

  function logout() {
    // Let other players know the game has concluded
    GameNotifier.broadcastEvent(userName, GameEvent.End, {});
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
      <img width="400px" src="alltooeasy2.jpg" id="darthcat" 
        alt="https://shirtigo.co/wp-content/uploads/2016/02/alltooeasy.jpg"></img>
      <div className='playerName'>{props.userName}</div>
      <Button variant='primary' onClick={() => navigate('/play')}>
        Play
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}