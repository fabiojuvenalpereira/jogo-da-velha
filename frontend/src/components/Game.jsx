import React, { useState, useEffect } from 'react';
import socket from '../utils/socket';

const Game = () => {
    let [click, setClick] = useState('');

  useEffect(() => {
    socket.on('jogou', (currentState) => {
      console.log('teste');
      setClick = currentState;
    });

  }, []);

  const handleClick = ({target}) => {
    console.log(target.value);
    socket.emit('clicou', target.value)
  }


  return (
    <div>
      <button 
      type="button"
      onClick={ handleClick }
      >1
      </button>
      
      <button 
      type="button"
      onClick={ handleClick }
      >2
      </button>
      
      <button 
      type="button"
      onClick={ handleClick }
      >3
      </button>
    </div>
  )
}

export default Game;