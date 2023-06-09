import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Navigate, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import News from './News'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return ( //Nav goes in div
    <Router>
      <div>
        <nav>
            <ul>
                <li>
                 <Link to="/home">Home</Link>
                 </li>
                 <li>
                <Link to="/profile">Profile</Link>
                </li>
                <li>
                <Link to="/news">News</Link>
                </li>
            </ul>
         </nav>

        <Routes>
          <Route exact path="/" element =  {isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />}/>


          <Route path="/home" element =  {isLoggedIn ? <Home /> : <Navigate to="/" />}/>


          <Route path="/profile" element = {isLoggedIn ? <Profile /> : <Navigate to="/" />}/>

          <Route path="/news" element =  {isLoggedIn ? <News /> : <Navigate to="/" />}/>


        </Routes>
      </div>
    </Router>
  );
};

export default App;
