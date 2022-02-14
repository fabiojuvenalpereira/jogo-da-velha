import React, { useState, useEffect } from 'react';
import socket from '../utils/socket';

const Game = () => {
  // const [click, setClick] = useState('');

  useEffect(() => {
    socket.on('connection', () => {
      console.log('teste');
    });

  }, []);

  const handleClick = ({target}) => {
    console.log(target);
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