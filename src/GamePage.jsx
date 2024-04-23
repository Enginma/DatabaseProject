import React, { useState } from 'react';
import TopPage from './Components/Pages/TopPage'; 
import HeaderBar from './Components/Header/header';
import BotPage from './Components/Pages/BotPage';



const GamesPage = () => {

  const [loadGames, setLoadedGames] = useState([

  ])


  return (
    <>
      <HeaderBar/>
      <TopPage updateGames = {(games) => setLoadedGames(games)}/>
      <BotPage games = {loadGames}/>
    </>
  );
};

export default GamesPage;