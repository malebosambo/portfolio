import React from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import Home from './features/home';
import Login from './security/login';
import GithubProfile from './features/githubProfile';
import WebsiteApps from './features/websiteApps';
import MobileApps from './features/mobileApps';
import ContactUs from './features/contactUs';

export function App() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>Malebo Sambo</p>
        </div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/github">GitHub</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/contact">Contacts</Link>
        </nav>
      </div>
      <Home />
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
          <Link to="/home">Home</Link>
          <Link to="/github">GitHub</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/iot">IoT</Link>
          <Link to="/network">Network</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
      <GithubProfile />
    </div>
  )
}

export function Websites() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>Malebo Sambo</p>
        </div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/github">GitHub</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/iot">IoT</Link>
          <Link to="/network">Network</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
      <WebsiteApps />
    </div>
  )
}

export function Apps() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>Malebo Sambo</p>
        </div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/github">GitHub</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/iot">IoT</Link>
          <Link to="/network">Network</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
      <MobileApps />
    </div>
  )
}



export function Contact() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>Malebo Sambo</p>
        </div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/github">GitHub</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/iot">IoT</Link>
          <Link to="/network">Network</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
      <ContactComp />
    </div>
  )
}

export function Login() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>Malebo Sambo</p>
        </div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="#">GitHub</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/iot">IoT</Link>
          <Link to="/network">Network</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
      <LoginComp />
    </div>
  )
}