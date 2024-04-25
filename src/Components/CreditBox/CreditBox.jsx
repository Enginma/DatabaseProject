import React from 'react';

const FloatingCreditBox = () => {
  const creditBoxStyle = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: '#21222A',
    color: 'white',
    textAlign: 'center',
    padding: '7px 10px 0 10px', 
    zIndex: '1000',
  };

  return (
    <div style={creditBoxStyle}>
      <p>Made by Group 8: Xianqi Cao, Kainan Pan</p>
    </div>
  );
};

export default FloatingCreditBox;
