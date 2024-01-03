import React from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import Home from './features/home';
import CurriculumVitae from './features/curriculumVitae';
import Repositories from './features/repositories';
import WebsiteApps from './features/websiteApps';
import MobileApps from './features/mobileApps';
import ContactUs from './features/contactUs';

import Footer from './components/footer';
import { NavLink } from 'react-bootstrap';

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
      <CurriculumVitae />
    </div>
  )
}
    
export function Repos() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <h4>Malebo Sambo</h4>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cv-resume">CV</Link>
          <Link to="/repos">Repos</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </div>
      <Repositories />
    </div>
  )
}

export function Contacts() {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <h4>Malebo Sambo</h4>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cv-resume">CV</Link>
          <Link to="/repos">Repos</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </div>
      <ContactUs />
    </div>
  )
}