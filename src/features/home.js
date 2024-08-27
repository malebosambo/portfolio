import React from 'react';
import '../styles/home.css';
import ContentItem from './contentItem';
import RepoTable from './repoTable';


export default function Home() {

  const services = [
    {
      id: 1,
      name: "Web Apps",
      ops: ["Static", "Dynamic", "SPA/PWA/EDA"],
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
          <img src="./Malebo-Sambo.png" alt="avatar" className="Avatar" />
        </div>
        <div className="Profile">
          <h1>Malebo Sambo</h1><br />
          <h4>Software Developer/Engineer, Entrepreneur, Business Analyst</h4><br />
          <img src="Email.png" className="Icon" />
          <a href="mailto:sambo.malebo96@gmail.com"><h5>sambo.malebo96@gmail.com</h5></a><br />
          <img src="./Telephone.png" className="Icon" />
          <a href="tel:+27630013711"><h5>+27630013711</h5></a><br />
          <img src="./Location.png" className="Icon" />
          <h5>South Africa</h5>
        </div>
        <div className="Online">
          <a href="www.linkedin.com/malebosambo"><img src="./Linkedin.png" alt="LinkedIn" className="Icon" /></a>
          <a href="www.github.com/sambomalebo"><img src="./Github.png" alt="GitHub" className="Icon" /></a>
          <a href="www.twitter.com/lovais000"><img src="./Twitter.png" alt="Twitter" className="Icon" /></a>
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
        <div style={{paddingBottom: "30px", textAlign: "center", borderBottom: "1px solid grey", }}><h1>Repositories</h1></div>
        <RepoTable />
      </div>
        
    </div>
  )
}