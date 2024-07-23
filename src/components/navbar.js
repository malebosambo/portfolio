import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/cv-resume">CV</Link>
      <Link to="/repos">Repos</Link>
      <Link to="/issues">Issues</Link>
      <Link to="/contacts">Contacts</Link>
    </>       
  )
}