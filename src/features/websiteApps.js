import React, { Component } from 'react';

class Websites extends Component {
  
  render() {
    return (
      <div>
      
        <h1>Website Development</h1>
        
        <div>
          <ul>
            <li><label htmlFor="hosting">Hosting</label><select id="hosting" name="hosting"><option value="SHP">Self-Hosted Provider</option><option value="cloud">Cloud</option></select></li>
            <li><label htmlFor="framework">Framework</label><select id="framework" name="framework"><option value="express">Express.js</option><option value="react">React.js</option><option value="wordpress">Wordpress</option></select></li>
          </ul>
        </div>
        
        <div className="Website">
          <div className="Website_Iframe">
            <h2>Billing Portal</h2>
            
          </div>
          <div className="Website_Details">
            <h3>Project Details</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Websites;