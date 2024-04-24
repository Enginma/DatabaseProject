import React, { useState } from 'react';
import TopPage from './Components/Pages/TopPage'; 
import HeaderBar from './Components/Header/header';
import BotPage from './Components/Pages/BotPage';
import CreditBox from './Components/CreditBox/CreditBox';


 const GamesPage = () => {

   const [loadGames, setLoadedGames] = useState([

   ])


   return (
     <>
       <HeaderBar/>
       <TopPage updateGames = {(games) => setLoadedGames(games)}/>
       <BotPage games = {loadGames}/>
       <CreditBox/>
     </>
   );
 };

export default GamesPage;