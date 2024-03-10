import React from 'react';
import './button.css'; 

const GameButton = ({ text, onClick, className }) => {
  return (
    <button className={`game-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default GameButton;
