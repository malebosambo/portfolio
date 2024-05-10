import React from 'react';
import './App.css';
import Home from './features/home';
import CurriculumVitae from './features/curriculumVitae'; 
import Repositories from './features/repositories';
import ViewRepo from './features/viewRepo';
import Issues from './features/issueTable';
import WebsiteApps from './features/websiteApps';
import MobileApps from './features/mobileApps';
import ContactUs from './features/contactUs';
import Nav from './components/navbar';
import Footer from './components/footer';

export function App() {
  return (
    <div>
      <div className="Header">
        <Nav />
      </div> 
      <Home />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export function CVresume() {
  return (
    <div>
      <div className="Header">
        <Nav /> 
      </div> 
      <CurriculumVitae />
      <div>
        <Footer />
      </div>
    </div>
  )                                          
}

export function Repos() {
  return (
    <div>
      <div className="Header">
        <Nav />
      </div>
      <Repositories />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export function Web() {
  return (
    <div>
      <div className="Header">
        <Nav />
      </div>
      <WebsiteApps />
      <div>
        <Footer />
      </div>  
    </div>
  )
}

export function Apps() {
  return (
    <div>
      <div className="Header">
        <Nav />
      </div>
      <MobileApps />
      <div>
        <Footer />
      </div>  
    </div>
  )
}

export function ViewRepository() {
  return (
    <div>
      <div className="Header">
        <Nav /> 
      </div> 
      <ViewRepo />
      <div>
        <Footer />
      </div>  
    </div>
  )
}

export function RepoIssues() {
  return (
    <div>
      <div className="Header">
        <Nav />
      </div> 
      <Issues />
      <div>
        <Footer />
      </div>  
    </div>
  )
}

export function Contacts() {
  return (
    <div>
      <div className="Header">
        <Nav />
      </div>
      <ContactUs />
      <div>
        <Footer />
      </div>
    </div>
  )
}