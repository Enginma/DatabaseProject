import Button from '../Button/button';

const GamesPage = () => {
  const handleButtonClick = (e) => {
    console.log('Button clicked!', e);
  };
  
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Select a Category</h1>
      <div className="button-container">
        <Button text="Fighting Games" onClick={handleButtonClick} />
        <Button text="Shooter Games" onClick={handleButtonClick} />
        <Button text="RPG Games" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default GamesPage;
