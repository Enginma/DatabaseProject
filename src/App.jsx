import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamesPage from '/Users/lnour/Desktop/DatabaseProject/src/HomePage.jsx';
import LoginPage from '/Users/lnour/Desktop/DatabaseProject/src/Components/Auth/LoginPage.jsx';
import '/Users/lnour/Desktop/DatabaseProject/App.css'; 
import { UserProvider } from '/Users/lnour/Desktop/DatabaseProject/src/UserContext.jsx';
import SignUpPage from './Components/Auth/SignupPage';

const App = () => {
  return (
    <Router>
      
      <UserProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/post_login" element={<GamesPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;

// const GamesPage = () => {

//   const [loadGames, setLoadedGames] = useState([

//   ])


//   return (
//     <>
//       <HeaderBar/>
//       <TopPage updateGames = {(games) => setLoadedGames(games)}/>
//       <BotPage games = {loadGames}/>
//     </>
//   );
// };

// export default GamesPage;