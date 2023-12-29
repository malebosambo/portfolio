import React from 'react';
import '../styles/homeContentCont.css';
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

  const content = services.map((service) => <ContentItem content={service} />);
  console.log(services);

  return (
    <div className="Container">
      <div className="C overview">
        <div className="Avatar">
        </div>
        <div className="Basic-Details">
        </div>
      </div>
 
      <div className="container">
        <div className="row">
          {content}
        </div>
      </div>
        
    </div>
  )
}