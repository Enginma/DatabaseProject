import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamesPage from './HomePage';
import LoginPage from './Components/Auth/LoginPage';
import '../App.css'; 
import { UserProvider } from './UserContext';
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