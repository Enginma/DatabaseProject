import React, { useState } from 'react';
import TextBox from '../InputBox/TextInput';
import './TopPage.css';
import Card from '../Cards/card';

const GamesPage = (props) => {

  const [backgroundImages, setBackgroundImages] = useState({
    image1: './src/assets/projectyi.png',
    image2: './src/assets/gwen.png',
  });

  const handleButtonClick = async (category) => {

    const response = await fetch(`http://localhost:3001/data/genre/${category}`);
    const gameGenre = await response.json();


    props.updateGames(gameGenre);
    console.log(gameGenre);
    console.log('Button clicked!', category);

    switch (category) {
      case 'Fighting':
        setBackgroundImages({
          image1: './src/assets/terry.png', 
          image2: './src/assets/king2.png', 
        });

        break;
      case 'Shooter':
        setBackgroundImages({
          image1: './src/assets/t.png',
          image2: './src/assets/sas.png',
        });
        break;
      case 'RPG':
        setBackgroundImages({
          image1: './src/assets/shadowh.png',
          image2: './src/assets/astarion.png',
        });
        break;

      default:
        setBackgroundImages({
          image1: './src/assets/projectyi.png',
          image2: './src/assets/gwen.png',
        });
    }
    
  };

  return (
    <main style={{
      backgroundImage: `url(${backgroundImages.image1}), url(${backgroundImages.image2})`,
      backgroundPosition: 'top right 130px, top left 80px', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    }}>       
      <div className="games-page">
        <div className="flex-container">
          <div className="right-section">
            <h1 className="main--title">Select a Category</h1>
            <div className="button-container">
              <div className="game-button game-button-with-image" onClick={() => handleButtonClick('Fighting')}>
                <Card src="tekken8.png" alt="Fighting games"/>
                <span>Fighting Games</span>
              </div>
              <div className="game-button game-button-with-image" onClick={() => handleButtonClick('Shooter')}>
                <Card src="cs2.png" alt="Shooter games"/>
                <span>Shooter Games</span>
              </div>
              <div className="game-button game-button-with-image" onClick={() => handleButtonClick('RPG')}>
                <Card src="bg3.png" alt="RPG games"/>
                <span>RPG Games</span>
              </div>
            </div>
            <h2 className="search-title">Search for a specific game</h2>
            <TextBox />

          </div>
        </div>
      </div>
    </main>
    
  );
};

export default GamesPage;