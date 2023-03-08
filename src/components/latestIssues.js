import React, { Component } from 'react';
import 'latestIssues.css';

class LatestIssues extends Component {
  state = {
    issues : [
      { id: 1, title: "Build workflow failed", description: "Node requires v18, v12 has depracated", collaborator: " malebo sambo", status: "open", project: " portfolio" }
    ]
  }
  
  constructor(props) {
    super(props);
  }
  
  filterIssues = (name, e) => {
    console.log('Filter button pressed:', {name})
  }
  
  render() {
    
    const issues = this.state.issues.map( (issue) => 
      <tr key={issue.id}>
        <td>{issue.title}</td>
        <td>{issue.description}</td>
        <td>{issue.collaborator}</td>
        <td>{issue.status}</td>
        <td>{issue.project}</td>
      </tr>
    );
    
    return (
      <React.Fragment>
      
        <div className="Section">
          <h1>Latest Issues</h1>
          
          <div className="Section_Filters">
            <button className="btn btn-secondary btn-sm" onClick={() => this.filterIssues("websites")}>Websites</button>
            <button className="btn btn-secondary btn-sm" onClick={() => this.filterIssues("apps")}>Apps</button>
            <button className="btn btn-secondary btn-sm" onClick={() => this.filterIssues("iot")}>IoT</button>
            <button className="btn btn-secondary btn-sm" onClick={() => this.filterIssues("network")}>Network</button>
          </div>
      
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Collaborator</th>
                <th>Status</th>
                <th>Project</th>
              </tr>
            </thead>
            <tbody>
              {issues}
            </tbody>
          </table>
        </div>
        
      </React.Fragment>  
    )
  }
}

export default LatestIssues;