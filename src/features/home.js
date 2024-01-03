import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import ContentItem from './contentItem';
import RepoTable from './repoTable';

export default function Home() {

  const services = [
    {
      id: 1,
      name: "Web Apps",
      ops: ["Static", "Dynamic", "SPA", "PWA"],
      imgUrl: "./Web-App.jpg",
      url: "/web-apps"
    },
    {
      id: 2,
      name: "Mobile Apps",
      ops: ["Android", "iOS", "App Gallery"],
      imgUrl: "./Mobile-App.png",
      url: "/mobile-apps"
    }
  ];

  return (
    <div className="Container">

      <div className="CV-Overview">
        <div className="Avatar">
          <img src="./CVAvatar.jpg" alt="avatar" className="img-circle" />
        </div>
        <div className="Basic-Details">
          <h2>Malebo Sambo</h2><br />
          <h5>Software Developer/Engineer, Entrepreneur, Business Analyst</h5><br />
          <h6>Email: sambo.malebo96@gmail.com</h6><br />
          <h6>Cell: +27630013711</h6>
        </div>
      </div>
 
      <div className="container">
        <div className="row">
          {services.map((service) => <ContentItem key={service.id} image={service.imgUrl} name={service.name} list={service.ops} link={service.url} />)}
        </div>
      </div>

      <div className="Repo-List">
        <div style={{paddingBottom: "30px", textAlign: "center"}}><h1>Repositories</h1></div>
        <RepoTable />
      </div>
        
    </div>
  )
}