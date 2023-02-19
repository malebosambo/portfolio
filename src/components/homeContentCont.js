import React, { Component } from 'react';
import './homeContentCont.css';

class HomeContentCont extends Component {
  state = {
    imageUrl: "/public/1675430271622.jpeg"
  };
  
  constructor (props) {
    super(props);
  }
  
  render() {
    
    const content = this.props.services.map( (service) => 
      <div className="Service" key={service.id}>
        <div className="Heading">
          <h2>{service.name}</h2>
        </div>
        <hr/>
        <div className="Benefits">
          <p>Services:</p>
          <ul><li key={service.ops}>{service.ops}</li></ul>
        </div>
        <div className="Image">
          <p>Image placeholder</p>
        </div>
        
      </div>
    )
      
    return (
      <div className="Container">
        
        <div className="Service_Content">
        {content}
        </div>
        
        <div className="Section_Cont">
          <div className="Section_Name">
            <h1>Latest Issues</h1>
          </div>
          <div className="Section_Filters">
            <button className="btn btn-secondary btn-sm" onClick="">Websites</button>
            <button className="" onClick="">Apps</button>
            <button className="" onClick="">IoT</button>
            <button className="" onClick="">Network</button>
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