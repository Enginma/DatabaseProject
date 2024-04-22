import React, { useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import './header.css';
export default function Headerbar() {
    const { user, setUser } = useUser();
    console.log('User:', user);
    const handleLogout = async () => {
        try {
            const endpoint = 'http://localhost:3001/api/logout';
            const response = await fetch(endpoint, {
                method: 'POST', // Sending a POST request
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Logout response:', response);
            if (response.ok) {
                setUser(null); // Clear user context
                alert('Returning to log in page now')
                window.location.href = '/'; // Redirect to login page
                
            } else {
                throw new Error('Logout failed with status: ' + response.status);
            }
        } catch (error) {
            console.error('Logout error:', error);
            alert('Logout failed, please try again.');
        }
    };

    return (
        <header>
            <h2 className="header--text">
                Game Data Analyst
            </h2>
            <h4 className="username-display">{user ? user.username : 'Not signed in'}</h4>
            <div className="header--title">
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </header>
    );
}
