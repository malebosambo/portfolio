import React, { Component } from 'react';
import './component/homeContentCont.css';

class HomeContentCont extends Component {
  // state = {};
  
  constructor (props) {
    super(props);
  }
  
  render() {
    
    const content = this.props.services.map( (service) => 
      <div key={service.id}>
        <h3>{service.name}</h3>
        <div>
          <p>Services:</p>
          <ul><li key={service.ops}>{service.ops}</li>
          </ul>
        </div>
        <div>
          <img src={service.imgUrl} alt="Placeholder" />
        </div>
        <button>View More</button>
      </div>
    )
      
    return (
      <React.Fragment>
      
        <div className="Site_Nav">
          <div className="Site_Logo">
            <p>Malebo Sambo</p>
          </div>
          <div className="Site_Menu">
            <ul>
              <li><span>GitHub</span></li>
              <li><span>Websites</span></li>
              <li><span>Apps</span></li>
              <li><span>IoT</span></li>
              <li><span>Network</span></li>
              <li><span>Contact</span></li>
            </ul>
          </div>
        </div>
        
        <div className="Service_Content">
        {content}
        </div>
        
        <div className="Section_Cont">
          <div className="Section_Name">
            <h5>Latest Issues</h5>
          </div>
          <div className="Section_Filters">
            <ul>
              <li><span><p>Websites</p></span></li>
              <li><span><p>Apps</p></span></li>
              <li><span><p>IoT</p></span></li>
              <li><span><p>Network</p></span></li>
            </ul>
          </div>
        </div>
        
        <div>
          // Create a component for the table with latest issues
        </div>
      </React.Fragment>
    )
  }
}

export default HomeContentCont;