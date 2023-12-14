import React from 'react';

import { Players } from './players';
import { MainGame } from './mainGame';

export function Play(props) {
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <MainGame userName={props.userName} />
    </main>
  );
}