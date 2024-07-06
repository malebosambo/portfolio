import React from 'react';
import '../styles/home.css';
import ContentItem from './contentItem';
import RepoTable from './repoTable';
import { SocialIcon } from 'react-social-icon';

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

      <div className="Overview">
        <div className="Avatar">
          <img src="./CVAvatar.jpg" alt="avatar" className="img-circle" />
        </div>
        <div className="Profile">
          <h1>Malebo Sambo</h1><br />
          <h3>Software Developer/Engineer, Entrepreneur, Business Analyst</h3><br />
          <h5><span className="material-icons">mail</span> sambo.malebo96@gmail.com</h5><br />
          <h5><span className="material-icons">call</span> +27630013711</h5><br />
          <h5><span className="material-icons">location_on</span> JHB/CPT/PLK/Remote</h5>
        </div>
        <div className="Online">
          <SocialIcon url="https://linkedin.com/malebosambo" />
          <SocialIcon url="https://github.com/sambomalebo" />
          <SocialIcon url="https://facebook.com/correy.sa" />
          <SocialIcon url="https://x.com/lovais00" />
        </div>
      </div>
 
      <div className="Content">
      <div style={{paddingBottom: "30px", textAlign: "center"}}><h1>Services</h1></div>
        <div className="container">
          <div className="row">
            {services.map((service) => <ContentItem key={service.id} image={service.imgUrl} name={service.name} list={service.ops} link={service.url} />)}
          </div>
        </div>
      </div>  

      <div className="Repo-List">
        <div style={{paddingBottom: "30px", textAlign: "center"}}><h1>Repositories</h1></div>
        <RepoTable />
      </div>
        
    </div>
  )
}
