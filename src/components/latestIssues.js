import React, { Component } from 'react';
import IssueItem from './issueitem';
import './latestIssues.css';

class LatestIssues extends Component {
  state = {
    issues : [
      { 
        id: 1, 
        title: "Build workflow failed", 
        description: "Node requires v18, v12 has depracated", 
        collaborator: "malebo sambo", 
        status: "open", 
        project: "portfolio" 
      },
      {
        id: 2,
        title: "Create architecture overview",
        description: "Design a high level architecture overview for senior managemeny.",
        collaborator: "malebo sambo",
        status: "open",
        project: "portfolio"
      }
    ]
  }
  
  constructor(props) {
    super(props)
  }
  
  filterIssues = (name, e) => {
    console.log('Filter button pressed:', {name})
  }
  
  render() {
    return (
      <>
        <div className="Section">
          <h1>Latest Issues <span>{this.state.issues.length}</span></h1>
          
          <div className="Section_Filters">
            <button className="btn btn-secondary btn-sm" onClick={(e) => this.filterIssues("websites")}>Websites</button>
            <button className="btn btn-secondary btn-sm" onClick={(e) => this.filterIssues("apps")}>Apps</button>
            <button className="btn btn-secondary btn-sm" onClick={(e) => this.filterIssues("iot")}>IoT</button>
            <button className="btn btn-secondary btn-sm" onClick={(e) => this.filterIssues("network")}>Network</button>
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
              {this.state.issues.map((issue) => (<IssueItem issue={issue} />))}
            </tbody>
          </table>
        </div>
        
      </>  
    )
  }
}

export default LatestIssues;