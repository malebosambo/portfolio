import React, { Component } from 'react';
import IssueItem from './issueItem';
import '../styles/latestIssues.css';
import '../App.css';

class LatestIssues extends Component {
  state = {
    issues : [
      { 
        id: 1, 
        title: "Build workflow failed", 
        description: "Node requires v18, v12 has depracated", 
        collaborator: "malebo sambo", 
        status: "open", 
        project: "portfolio",
        type: "website" 
      },
      {
        id: 2,
        title: "Create architecture overview",
        description: "Design a high level architecture overview for senior managemeny.",
        collaborator: "malebo sambo",
        status: "open",
        project: "portfolio",
        type: "website"
      }
    ]
  }
  
  filterIssues = name => {
    console.log('Filter button pressed:' + name);
    
  }
  
  render() {
    return (
      <>
        <div className="Section">
          <h1>Latest Issues <span className="badge badge-primary">{this.state.issues.length}</span></h1>
          
          <div className="btn-group">
            <button className="btn btn-primary m-2" onClick={() => this.filterIssues("websites")}>Websites</button>
            <button className="btn btn-primary m-2" onClick={() => this.filterIssues("apps")}>Apps</button>
            <button className="btn btn-primary m-2" onClick={() => this.filterIssues("iot")}>IoT</button>
            <button className="btn btn-primary" onClick={() => this.filterIssues("network")}>Network</button>
          </div>
      
          <div className="TableResponse">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Collaborator</th>
                  <th>Status</th>
                  <th>Project</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
              {this.state.issues.map((issue) => (<IssueItem issue={issue} />))}
              </tbody>
            </table>
          </div>

        </div>
      </>  
    )
  }
}

export default LatestIssues;