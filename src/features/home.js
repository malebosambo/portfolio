import React from 'react';
import '../styles/homeContentCont.css';
import LatestIssues from './latestIssues';
import ContentItem from './contentItem';

export default function Home() {

  const services = [
    {
      id: 1,
      name: "GitHub Profile",
      ops: ["DevOps", "Virtualization", "Security"],
      imgUrl: "./GitHub.png",
      url: "/github"
    },
    {
      id: 2,
      name: "Web Apps",
      ops: ["Fintech", "eCommerce", "AI", "Community"],
      imgUrl: "./Web-App.jpg",
      url: "/websites"
    },
    {
      id: 3,
      name: "Mobile Apps",
      ops: ["Fintech", "eCommerce", "AI", "Community"],
      imgUrl: "./Mobile-App.png",
      url: "/apps"
    }
  ];

  const content = services.map((service) => <ContentItem content={service} />);

  return (
    <div className="Container">
        
      <div className="container">
        <div className="row">
          {content}
        </div>
      </div>
        
      <div className="Latest_Issues">
        <LatestIssues />
      </div>
        
    </div>
  )
}