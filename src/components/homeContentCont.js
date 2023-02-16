import React, { Component } from 'react';
import './homeContentCont.css';

class HomeContentCont extends Component {
  // state = {};
  
  constructor (props) {
    super(props);
  }
  
  render() {
    
    const content = this.props.services.map( (service) => 
      <div key={service.id}>
        <h2>{service.name}</h2>
        <hr/>
        <div className="Benefits">
          <p>Services:</p>
          <ul>
            <li key={service.ops}>{service.ops}</li>
          </ul>
        </div>
        <div className="Image">
          <img src={service.imgUrl} alt="Placeholder" />
        </div>
        <Link to={service.url}>View More</Link>
      </div>
    )
      
    return (
      <div className="container">
      
        <div className="Site_Nav">
          <div className="Site_Logo">
            <p>Malebo Sambo</p>
          </div>
          <div className="Site_Menu">
            <p>X</p>
          </div>
        </div>
        
        <div className="Service_Content">
        {content}
        </div>
        
        <div className="Section_Cont">
          <div className="Section_Name">
            <h1>Latest Issues</h1>
          </div>
          <div className="Section_Filters">
            <button onClick="">Websites</button>
            <button onClick="">Apps</button>
            <button onClick="">IoT</button>
            <button onClick="">Network</button>
          </div>
        </div>
        
        <div>
          // Create a component for the table with latest issues
        </div>
        
      </div>
    )
  }
}

export default HomeContentCont;