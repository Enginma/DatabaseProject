import React, { useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import './header.css';
import { useNavigate } from 'react-router-dom';

export default function Headerbar() {
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [developerGames, setDeveloperGames] = useState(null);  

    const handleLogout = async () => {
        try {
            const endpoint = 'http://localhost:3001/api/logout';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setUser(null);
                navigate('/');
            } else {
                throw new Error('Logout failed with status: ' + response.status);
            }
        } catch (error) {
            console.error('Logout error:', error);
            alert('Logout failed, please try again.');
        }
    };

    const getEmail = async () => {
        if (user && user.username) {
            const endpoint = `http://localhost:3001/data/email/${user.username}`;
            try {
                const response = await fetch(endpoint);
                if (response.ok) {
                    const data = await response.json();
                    setEmail(data[0].email);
                    fetchDeveloperGames(data[0].email);
                } else {
                    throw new Error('Get email failed with status: ' + response.status);
                }
            } catch (error) {
                console.error('Get email error:', error);
                alert('Get email failed, please try again.');
            }
        }
    };

    async function fetchDeveloperGames(email) {
        try {
            const endpoint = `http://localhost:3001/data/developers/games/${email}`;
            const response = await fetch(endpoint);
            if (response.ok) {
                const games = await response.json();
                setDeveloperGames(games.length > 0 ? games : []);
                setShowPopup(true);
            } else {
                throw new Error('Failed to fetch developer games.');
            }
        } catch (error) {
            console.error('Error fetching developer games:', error);
            setDeveloperGames([]); 
            setShowPopup(true);
        }
    }

    const handleClosePopup = () => {
        setShowPopup(false);
        setDeveloperGames(null);  
    };

    return (
        <header className='headerContainer' >
            <h2 className="header--text">Game Data Analyst</h2>
            <div className='usernameContainer'>
                <h4 className="username-display">{user ? 'Welcome back, ' + user.username : 'Not signed in'}</h4>
                <button className="logout-button" onClick={user ? getEmail : handleLogout}>
                    {user ? 'Developer View' : 'Log in/Sign up'}
                </button>
                { user ? (
                    <button className="logout-button" onClick={handleLogout}>
                        Log out
                    </button> 
                ) : null }
            </div>
            
            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <h2>Your Games</h2>
                        {developerGames && developerGames.length > 0 ? (
                            <ul>
                                {developerGames.map((game, index) => (
                                    <li key={index}>{game.game_title}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No games found.</p>
                        )}
                        <button onClick={handleClosePopup} className="close-button">Close</button>
                    </div>
                </div>
            )}
        </header>
    );
}
