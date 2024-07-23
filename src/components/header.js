import React, { useState } from 'react';
import Nav from "./navbar";

export default function Header() {

  const [ mobileMenu, setMobileMenu ] = useState(false);

  const showMenu = () => setMobileMenu(!mobileMenu);  

  return (
    <main className="Header">
      <div className="Logo">
        <div><img src="./Malebo-Sambo-Logo-Transp.png" atl="malebo-sambo-logo" className="Logo" /></div>
        <div className="Mobile-Menu" style={{padding: "20px"}}>
          <button onClick={showMenu} className={ !mobileMenu ? "" : "Menu" }>=</button>
          <button onClick={showMenu} className={ mobileMenu ? "" : "Menu" }>X</button>
        </div>  
      </div>
      <div className={ mobileMenu ? "Menu-Visible" : "Menu" }>
        <Nav />
      </div>
    </main>    
  )
}