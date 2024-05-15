import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const { mobileMenu, setMobileMenu } = useState(false);

  const showMenu = () => setMobileMenu(!mobileMenu);

  return (
    <>
      <div className="Logo">
        <img src="./Malebo-Sambo-Logo-Transp.png" atl="malebo-sambo-logo" className="Logo" />
        <button onClick={showMenu} className="Mobile-Menu"><i className="bi bi-list"></i></button>
        <button onClick={showMenu} className="Mobile-Menu-Close"><i className="bi bi-x"></i></button>
      </div>
      <div className="Menu">
        <Link to="/">Home</Link>
        <Link to="/cv-resume">CV</Link>
        <Link to="/repos">Repos</Link>
        <Link to="/issues">Issues</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </>       
  )
}