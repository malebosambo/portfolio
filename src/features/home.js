import React from 'react';
import '../styles/home.css';
import ContentItem from './contentItem';

export default function Home() {

  const services = [
    {
      id: 1,
      name: "Curriculum Vitae",
      ops: ["Personal Details", "Education Details", "Skills", "Employment History"],
      imgUrl: "",
      url: "/cv-resume"
    },
    {
      id: 2,
      name: "Repositories",
      ops: ["Public Repos", "Issues", "Contributors", "Discussions"],
      imgUrl: "./github.jpg",
      url: "/repos"
    },
    {
      id: 3,
      name: "Web Apps",
      ops: ["Static", "Dynamic", "SPA", "PWA"],
      imgUrl: "./Web-App.jpg",
      url: "/websites"
    },
    {
      id: 4,
      name: "Mobile Apps",
      ops: ["Android", "iOS", "App Gallery", "Community"],
      imgUrl: "./Mobile-App.png",
      url: "/apps"
    }
  ];

  return (
    <div className="Container">

      <div className="CVoverview">
        <div className="Avatar">
          <img src="./CVAvatar.jpg" alt="avatar" />
        </div>
        <div className="Basic-Details">
        </div>
      </div>
 
      <div className="container">
        <div className="row">
          {services.map((service) => <ContentItem key={service.id} image={service.imgUrl} name={service.name} list={service.ops} link={service.url} />)}
        </div>
      </div>
        
    </div>
  )
}