import React, { Component } from 'react';
import './component/homeContentCont.css';

class HomeContentCont extends Component {
  // state = {};
  
  constructor (props) {
    super(props);
  }
  
  render() {
    
    const content = this.props.services.map( (service) => 
      <div className="Service_Content">
        <h3>{service.name}</h3>
        <div>
          <p>Services:</p>
          <ul><li key={service}>{service.ops}</li>
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
        <div>
          <p>Malebo Sambo</p>
        </div>
        <div>
        {content}
        </div>
      </React.Fragment>
    )
  }
}

export default HomeContentCont;