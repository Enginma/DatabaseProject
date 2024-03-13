import Button from '../Button/button';
import TextBox from '../InputBox/TextInput';
import Sidebar from '../SideBar/sidebar';
import './TopPage.css';
import Card from '../Cards/card';

const GamesPage = () => {
  const handleButtonClick = (e) => {
    console.log('Button clicked!', e.target.textContent);
  };

  return (
    <main>
      <div className="games-page">
        <div className="flex-container">
          <div className="right-section">
            <h1 className="main--title">Select a Category</h1>
            <div className="button-container">
                <div className="game-button game-button-with-image" onClick={handleButtonClick}>
                  <Card src="tekken8.png" alt="Fighting games"/>
                  <span>Fighting Games</span> 
                </div>
                <div className="game-button game-button-with-image" onClick={handleButtonClick}>
                  <Card src="cs2.png"  alt="Shooter games"/>
                  <span>Shooter Games</span> 
                </div>                
                <div className="game-button game-button-with-image" onClick={handleButtonClick}>
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