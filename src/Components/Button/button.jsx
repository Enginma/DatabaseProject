import React from 'react';

const GameButton = ({ text, onClick }) => {
  return (
    <button className="game-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default GameButton;
