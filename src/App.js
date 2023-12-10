import React from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import Home from './features/home';
import CurriculumVitae from './features/curriculumVitae';
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
        <div>
          <Link to="/home">Home</Link>
          <Link to="/cv-resume">CV</Link>
          <Link to="/repos">Repos</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/contacts">Contacts</Link>
        </div>  
      </div> 
      <Home />
    </div>
  )
}

export function CurriculumVitae() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>Malebo Sambo</p>
        </div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/cv-resume">CV</Link>
          <Link to="/repos">Repos</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </div>
      <CurriculumVitae />
    </div>
  )
}
    
export function Repos() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>Malebo Sambo</p>
        </div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/cv-resume">CV</Link>
          <Link to="/repos">Repos</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/contacts">Contacts</Link>
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
          <Link to="/cv-resume">CV</Link>
          <Link to="/repos">Repos</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/contacts">Contacts</Link>
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
          <Link to="/repos">Repos</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </div>
      <MobileApps />
    </div>
  )
}



export function Contacts() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>Malebo Sambo</p>
        </div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/cv-resume">CV</Link>
          <Link to="/repos">Repos</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </div>
      <ContactUs />
    </div>
  )
}