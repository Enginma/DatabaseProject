import React, { useState } from 'react';
import TopPage from './Components/Pages/TopPage'; 
import HeaderBar from './Components/Header/header';
import BotPage from './Components/Pages/BotPage';
import { UserProvider } from './UserContext';

 const GamesPage = () => {

   const [loadGames, setLoadedGames] = useState([

   ])


   return (
    <UserProvider>
     <>
       <HeaderBar/>
       <TopPage updateGames = {(games) => setLoadedGames(games)}/>
       <BotPage games = {loadGames}/>
     </>
     </UserProvider>
   );
 };

export default GamesPage;