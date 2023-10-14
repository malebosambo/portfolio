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
      
        <h1>GitHub Statistics</h1>
        
        <div className='GithubProfile_Stats'>

<div><h5>Repositories</h5></div>

<div><h5>Issues</h5></div>

<div><h5>Collaborators</h5></div>

<div><h5>Pulls</h5></div>

<div><h5>Commits</h5></div>

<div><h5>Branches</h5></div>

        </div>
        
      </div>
    )
  }
}

export default Github;