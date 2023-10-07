import React from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import HomeContentCont from './components/homeContentCont';
import LoginComp from './components/loginComp';
import GithubContentCont from './components/githubContentCont';
import WebsitesContentCont from './components/websitesContentCont';
import AppsContentCont from './components/appsContentCont';
import IoTContentCont from './components/iotContentCont';
import NetworkContentCont from './components/networkContentCont';
import ContactComp from './components/contactComp';


function Home() {
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
      <GithubContentCont />
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
      <WebsitesContentCont />
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
      <AppsContentCont />
    </div>
  )
}

export function IoT() {
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
      <IoTContentCont />
    </div>
  )
}

export function Network() {
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
      <NetworkContentCont />
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

export function App() {
  return <Home />
}