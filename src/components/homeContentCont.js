import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './homeContentCont.css';
import LatestIssues from './latestIssues';
import ContentItem from './contentitem';

class HomeContentCont extends Component {
  state = {
    services : [
      {
        id: 1,
        name: "GitHub",
        ops: ["DevOps", "Virtualization", "Security"],
        imgUrl: "./architecture.jpeg",
        url: "/github"
      },
      {
        id: 2,
        name: "Websites",
        ops: ["Fintech", "eCommerce", "AI", "Community"],
        imgUrl: "./architecture.jpeg",
        url: "/websites"
      },
      {
        id: 3,
        name: "Apps",
        ops: ["Fintech", "eCommerce", "AI", "Community"],
        imgUrl: "./architecture.jpeg",
        url: "/apps"
      },
      {
        id: 4,
        name: "Internet of Things",
        ops: ["Security", "Utility"],
        imgUrl: "./architecture.jpeg",
        url: "/iot"
      },
      {
        id: 5,
        name: "Network",
        ops: ["Internet", "Cybersecurity"],
        imgUrl: "./architecture.jpeg",
        url: "/network"
      }
    ]
  };
  
  render() {
    return (
      <div className="Container">
        
        <div className="Service_Content">
          {this.state.services.map((service) => (<ContentItem content={service} />))}
        </div>
        
        <div className="Latest_Issues">
          <LatestIssues />
        </div>
        
      </div>
    )
  }
}

export default HomeContentCont;