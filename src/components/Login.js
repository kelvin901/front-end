import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { useEffect } from 'react';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
}
    useEffect(() => {
      fetch("http://localhost:4567/login")
      .then((r) => r.json())
      .then((data) => {
        Login(data);
      });
    }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

 

      if (response.ok) {
        setIsLoggedIn(true);
        history('/home');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
