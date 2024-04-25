import React, { useState } from 'react';
import './login.css';
import backgroundImage from './bg.jpg';
import HomePage from '../../HomePage';
import { useUser } from  '../../UserContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
        const endpoint = 'http://localhost:3001/api/login';
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
          const { isAuthenticated } = await response.json();
          if (isAuthenticated) {
            setUser({ username });
            console.log(username);
            navigate('/post_login');
            ;
          } else {
            alert('Login failed: Invalid credentials');
          }
        } else {
          alert('Login failed with status: ' + response.status);
        }
    } catch (error) {
        console.error('Login failed', error);
        alert('An error occurred. Please try again later.');
    }
  };


  return (
    <body className="img js-fullheight" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Login</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <h3 className="mb-4 text-center">Have an account?</h3>
                <form onSubmit={handleLogin} className="signin-form">
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
                    <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
                  </div>
                </form>
                <p className="w-100 text-center">&mdash; If you don't have an account &mdash;</p>
                <div className="social d-flex text-center">
                  <a href="/sign-up" className="px-2 py-2 mr-md-1 rounded">
                    <span className="ion-logo-facebook mr-2"></span>
                    Sign up
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

export default LoginPage;
