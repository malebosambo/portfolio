import React, { Component } from 'react';
import './homeContentCont.css';
import LatestIssues from '../components/latestIssues';
import ContentItem from '../components/contentitem';

class HomeContentCont extends Component {
  state = {
    services : [
      {
        id: 1,
        name: "GitHub",
        ops: ["DevOps", "Virtualization", "Security"],
        imgUrl: "./GitHub.png",
        url: "/github"
      },
      {
        id: 2,
        name: "Websites",
        ops: ["Fintech", "eCommerce", "AI", "Community"],
        imgUrl: "./Web-App.jpg",
        url: "/websites"
      },
      {
        id: 3,
        name: "Apps",
        ops: ["Fintech", "eCommerce", "AI", "Community"],
        imgUrl: "./Mobile-App.png",
        url: "/apps"
      },
      {
        id: 4,
        name: "IoT",
        ops: ["Security", "Utility"],
        imgUrl: "./Edge-Computing.png",
        url: "/iot"
      },
      {
        id: 5,
        name: "Network",
        ops: ["Internet", "Cybersecurity"],
        imgUrl: "./Networking.jpg",
        url: "/network"
      }
    ]
  };
  
  render() {

    const content = this.state.services.map((service) => <ContentItem content={service} />);

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
}

export default HomeContentCont;