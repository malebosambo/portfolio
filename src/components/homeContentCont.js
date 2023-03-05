import React, { Component } from 'react';
import './homeContentCont.css';
import LatestIssues from './latestIssues';

class HomeContentCont extends Component {
  state = {
    services = [
      {
        id: 1,
        name: "GitHub",
        ops: ["DevOps"],
        imgUrl: "/public/1675430271622.jpeg",
        url: "/components/github"
      },
      {
        id: 2,
        name: "Websites",
        ops: ["Hosting"],
        imgUrl: "/public/1675430271622.jpeg",
        url: "/components/websites"
      },
      {
        id: 3,
        name: "Apps",
        ops: ["AI"],
        imgUrl: "/public/1675430271622.jpeg",
        url: "/components/apps"
      },
      {
        id: 4,
        name: "Internet of Things",
        ops: ["Template"],
        imgUrl: "/public/1675430271622.jpeg",
        url: "/components/iot"
      },
      {
        id: 5,
        name: "Network",
        ops: ["Microservices"],
        imgUrl: "/public/1675430271622.jpeg",
        url: "/components/network"
      }
    ]
  };
  
  constructor (props) {
    super(props);
  }
  
  render() {
    
    const content = this.state.services.map( (service) => 
      <div className="Service" key={service.id}>
        <div className="Heading">
          <h2>{service.name}</h2>
        </div>
        <hr/>
        <div className="Benefits">
          <p>Services:</p>
          <ul>{this.state.services.ops.map( (op) => <li key={op}>{op}</li>)}</ul>
        </div>
        <div className="Image">
          <p>Image placeholder</p>
        </div>
        <div className="Link">
          <Link to={service.url}>View more</Link>
        </div>
      </div>
    )
      
    return (
      <div className="Container">
        
        <div className="Service_Content">
        {content}
        </div>
        
        <div className="Latest_Issues">
          <LatestIssues />
        </div>
        
      </div>
    )
  }
}

export default HomeContentCont;