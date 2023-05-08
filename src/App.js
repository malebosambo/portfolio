import React from 'react';
import './App.css';
import HomeContentCont from './components/homeContentCont';
import Login from './components/login';
import Github from './components/github';
import Websites from './components/websites';
import Apps from './components/apps';
import IoT from './components/iot';
import Network from './components/network';
import Contact from './components/contact';

import {
  BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>Malebo Sambo</p>
        </div>
        <nav>
          <Link to="#">Home</Link>
          <Link to="/github">GitHub</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/iot">IoT</Link>
          <Link to="/network">Network</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
      <HomeContentCont />
    </div>
  )
}
    
export function Github() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>Malebo Sambo</p>
        </div>
        <nav>
          <Link to="#">Home</Link>
          <Link to="/github">GitHub</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/iot">IoT</Link>
          <Link to="/network">Network</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
      <Github />
    </div>
  )
}