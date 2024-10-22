import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import ContentItem from './contentItem';
import RepoTable from './repoTable';
import RepoCard from './repoCard';


export default function Home() {

  const [repos,setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async (username) => {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await response.json();
      setRepos(data);
    };

    fetchRepos('malebosambo');
  }, []);

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
    <main className="Container">

      <div className="Overview">
        <div className="Avatar text-center">
          <img src="./Malebo-Sambo.png" alt="Avatar" className="img-fluid" />
        </div>
        <div className="Profile">
          <br />
          <h1>Malebo Sambo</h1><br />
          <h5>Software Developer/Engineer, Entrepreneur, Business Analyst</h5><br />
          <img src="Email.png" alt="Email Icon" className="Icon" />
          <a href="mailto:sambo.malebo96@gmail.com"><h6>sambo.malebo96@gmail.com</h6></a><br />
          <img src="./Telephone.png" alt="Telephone Icon" className="Icon" />
          <a href="tel:+27630013711"><h6>+27630013711</h6></a><br />
          <img src="./Location.png" alt="Location Icon" className="Icon" />
          <h6 style={{ color: "black" }}>South Africa</h6><br />
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

      <div className="Repo_List">
        <div style={{paddingBottom: "30px", textAlign: "center", borderBottom: "1px solid grey", }}><h1>Repositories</h1></div>
        <RepoTable />
        {repos.map((repo) => <RepoCard name={repo.name} description={repo.description} link={repo.url} />)}
      </div>
        
    </main>
  )
}