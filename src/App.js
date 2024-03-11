import React from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import Home from './features/home';
import CurriculumVitae from './features/curriculumVitae'; 
import Repositories from './features/repositories';
import ViewRepo from './features/viewRepo';
import Issues from './features/issueTable';
import WebsiteApps from './features/websiteApps';
import MobileApps from './features/mobileApps';
import ContactUs from './features/contactUs';
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
          <Link to="/issues">Issues</Link>
          <Link to="/contacts">Contacts</Link>
        </div>  
      </div> 
      <Home />
      <Footer />
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
            <Link to="/issues">Issues</Link>
            <Link to="/contacts">Contacts</Link>
          </div>  
        </div> 
      <CurriculumVitae />
      <Footer />
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
          <Link to"/issues">Issues</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </div>
      <Repositories />
      <Footer />
    </div>
  )
}

export function Web() {
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
          <Link to="/issues">Issues</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </div>
      <WebsiteApps />
      <Footer />
    </div>
  )
}

export function Apps() {
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
          <Link to="/issues">Issues</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </div>
      <MobileApps />
      <Footer />
    </div>
  )
}

export function ViewRepository() {
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
          <Link to="/issues">Issues</Link>
          <Link to="/contacts">Contacts</Link>
        </div>  
      </div> 
      <ViewRepo />
      <Footer />
    </div>
  )
}

export function IssuesTable() {
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
          <Link to="/issues">Issues</Link>
          <Link to="/contacts">Contacts</Link>
        </div>  
      </div> 
      <Issues />
      <Footer />
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
          <Link to="/issues">Issues</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </div>
      <ContactUs />
      <Footer />
    </div>
  )
}