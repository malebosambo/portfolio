import React, { Component } from 'react';

class Github extends Component {
  // State object is used to render dynamic data
  state = {
    repositories: 3,
    issues: 1,
    collaborators: 0
  };
  
  render() {
    return (
      <div>
      
        <h1>GitHub Profile</h1>
        
        <div className='GithubProfile_Stats'>
          <div>
            <h5>Repositories</h5><span>{this.state.repositories}</span>
          </div>
          <div>
            <h5>Issues</h5><span>{this.state.issues}</span>
          </div>
          <div>
            <h5>Collaborators</h5><span>{this.state.collaborators}</span>
          </div>
        </div>
        
        <div>
          <div className="Github_Filters">
            <p>Filters</p><button>Reset</button>
            <ul>
              <li><input type="checkbox" id="internal" name="internal" value="internal" /><label htmlFor="internal">Internal</label></li>
              <li><input type="checkbox" id="external" name="external" value="external" /><label htmlFor="external">External</label></li>
              <li><input type="checkbox" id="compute" name="compute" value="compite" /><label htmlFor="compute">Compute</label></li>
            </ul>
          </div>
          <div className="Github_Repos">
          </div>
        </div>
        
      </div>
    )
  }
}

export default Github;