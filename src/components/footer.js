import React from 'react';
import '../App.css';

export default function Footer() {

  return (
    <>
      <div className="Footer">
        <div className="Legal">
          <p>Copyright © 2024</p>
          <p>Malebo Sambo</p>
          <p>All rights reserved.</p>
        </div>
        <div className="Shortlinks">
          <p>Email: help@malebo.sambo.com</p>
          <p>Cell: +27630013711</p>
        </div>
        <div className="Socials">
          <a href="www.malebosambo.github.app"><img src="" alt="portfolio" /></a>
          <a href="www.linkedin.com/malebosambo"><img src="" alt="LinkedIn" /></a>
          <a href="www.github.com/sambomalebo"><img src="" alt="GitHub" /></a>
          <a href="www.twitter.com/lovais000"><img src="" alt="Twitter" /></a>
        </div>
      </div>
    </>
  )
}