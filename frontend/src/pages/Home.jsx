import React from 'react';
import Game from '../components/Game';
const Home = () => {
  return (
    <div>
      <div className="title-game">
        <h1>Jogo da Velha</h1>
        <Game />
      </div>

    </div>
  );
}

export default Home;