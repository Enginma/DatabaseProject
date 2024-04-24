import React, { useState } from 'react';
import './login.css';
import backgroundImage from './bg.jpg';
import HomePage from '../../HomePage';
import { useUser } from  '../../UserContext';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
  
    const handleSignUp = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch('http://localhost:3001/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
  
        if (response.ok) {
            alert('Sign up successful');
            alert('Please log in to continue');
            navigate('/');
        } else {
            const errorText = await response.text();
            switch (response.status) {
              case 400:
                alert('Failed to sign up: Invalid request. Please try again.');
              case 409:
                //alert('An account with the given username or email already exists.');
              default:
                alert(`Failed to sign up: ${errorText}`);
            }
        }
      } catch (error) {
        console.error('There was an error signing up:', error);
        alert('There was an issue signing up. Please check your connection and try again.');
      }
    };
  
    return (
        <body className="img js-fullheight" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Sign up</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="login-wrap p-0">
                  <h3 className="mb-4 text-center">Create an account</h3>
                  <form onSubmit={handleSignUp} className="signin-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="form-control btn btn-primary submit px-3">Register</button>
                    </div>
                  </form>
                  <p className="w-100 text-center">&mdash; If you already have an account &mdash;</p>
                <div className="social d-flex text-center">
                  <a href="/" className="px-2 py-2 mr-md-1 rounded">
                    <span className="ion-logo-facebook mr-2"></span>
                    Log in
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    );
  };
  
  export default SignUpPage;