import React, { useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import './header.css';
import { useNavigate } from 'react-router-dom';


export default function Headerbar() {
    const { user, setUser } = useUser();
    console.log('User:', user);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const endpoint = 'http://localhost:3001/api/logout';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Logout response:', response);
            if (response.ok) {
                setUser(null);
                alert('Returning to log in page now')
                window.location.href = '/';
                
            } else {
                throw new Error('Logout failed with status: ' + response.status);
            }
        } catch (error) {
            console.error('Logout error:', error);
            alert('Logout failed, please try again.');
        }
    };

    const get_email = async () => {

        const username = user.username;
        console.log('fuck me bitch >:( ', username)
        try {
            const endpoint = 'http://localhost:3001/data/' + username;
            const response = await fetch(endpoint);
            console.log('Get email response:', response);
            if (response.ok) {
                const data = await response.json();
                alert('Email: ' + data[0].email);
            } else {
                throw new Error('Get email failed with status: ' + response.status);
            }
        } catch (error) {
            console.error('Get email error:', error);
            alert('Get email failed, please try again.');
        }
    };


    const handleLogin = () => {
        navigate('/');
    };

    return (
        <header className='headerContainer'>
            <h2 className="header--text">
                Game Data Analyst
            </h2>
            <div className='usernameContainer'>
                <h4 className="username-display">{user ? 'Welcome back, ' + user.username : 'Not signed in'}</h4>
                <button className="logout-button" onClick={user ? get_email : handleLogin}>
                    {user ? 'Developer View' : 'Log in/Sign up'}
                </button>
                {
    user ? (
        <button className="logout-button" onClick={get_email}>
            Developer View
        </button>
    ) : null
}

            </div>
        </header>
    );
}

