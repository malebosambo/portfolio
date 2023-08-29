import React from 'react';
import { useState, useEffect } from 'react';
import IssueItem from './issueitem';
import './latestIssues.css';

function LatestIssues() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/malebosambo/portfolio/issues', {
      headers: {
        Accept: `application/vnd.github+json`,
        Authorization: process.env.GITHUB_TOKEN,
        X-GitHub-Api-Version: `2022-11-08`
      }}
    )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      setIssues(data);
      setError(null);
    })
    .catch(setError(error));
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error!</p>;
  
  const filterIssues = (name, e) => {
    console.log(`Filter button pressed: ${name}`);
    console.log(e.target);
  }
  
  return (
    <>
      <div className="Section">
        <h1>Latest Issues <span className="badge badge-primary">{issues.length}</span></h1>
          
        <div className="btn-group">
          <button className="btn btn-primary m-2" onClick={(e) => this.filterIssues("websites")}>Web</button>
          <button className="btn btn-primary m-2" onClick={(e) => this.filterIssues("apps")}>Mobile</button>
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
              {issues.map((issue) => (<IssueItem issue={issue} />))}
            </tbody>
          </table>
        </div>

      </div>
    </>  
  );
}

export default LatestIssues;
