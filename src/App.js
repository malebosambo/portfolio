import React from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import Home from './features/home';
import CurriculumVitae from './features/curriculumVitae';
import Repositories from './features/repositories';
import WebsiteApps from './features/websiteApps';
import MobileApps from './features/mobileApps';
import ContactUs from './features/contactUs';
import Navbar from './components/navbar';
import Footer from './components/footer';

export function App() {

  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <h4>Malebo Sambo</h4>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cv-resume">CV</Link>
          <Link to="/repos">Repos</Link>

          <Link to="/contacts">Contacts</Link>
        </div>  
      </div> 
      <Home />

    </div>
  )
}

export function CVresume() {
  return (
    <div>
      <div>
        <Navbar />
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
          <Link to="/">Home</Link>
          <Link to="/cv-resume">CV</Link>
          <Link to="/repos">Repos</Link>
          <Link to="/websites">Websites</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </div>
      <Repositories />
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
          <Link to="/">Home</Link>
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
          <Link to="/">Home</Link>
          <Link to="/cv-resume">CV</Link>
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
          <Link to="/">Home</Link>
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