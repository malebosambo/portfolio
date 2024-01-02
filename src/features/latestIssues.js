import React from 'react';
import IssueItem from './issueItem';
import '../styles/latestIssues.css';
import '../App.css';

export default function RepoIssues() {

  return (
    <>
      <div className="Section">
        <h1>Repo Issues</h1>
          
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
          
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}







