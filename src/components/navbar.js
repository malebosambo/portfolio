import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [ mobileMenu, setMobileMenu ] = useState(false);

  const showMenu = () => setMobileMenu(!mobileMenu);

  return (
    <>
      <div className="Logo">
        <div><img src="./Malebo-Sambo-Logo-Transp.png" atl="malebo-sambo-logo" className="Logo" /></div>
        <div style={{padding: "20px"}}>
          <button onClick={showMenu} className={ !mobileMenu ? "" : "Menu" }>=</button>
          <button onClick={showMenu} className={ mobileMenu ? "" : "Menu" }>X</button>
        </div>  
      </div>
      <div className={ mobileMenu ? "Menu-Visible" : "Menu" }>
        <Link to="/">Home</Link>
        <Link to="/cv-resume">CV</Link>
        <Link to="/repos">Repos</Link>
        <Link to="/issues">Issues</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </>       
  )
}