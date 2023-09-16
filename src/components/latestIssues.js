import React, { useState, useEffect } from 'react';
import IssueItem from './issueitem';
import './latestIssues.css';

export default function LatestIssues() {
  const [issues, setIssues] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/malebosambo/portfolio/issues", {
      headers: {
        Accept: `application/vnd.github+json`,
        Authorization: process.env.GITHUB_TOKEN,
        X-GitHub-Api-Version: `2022-11-28`
      }}
    )
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(result => {
      console.log(result);
      setIssues(result);
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);
  
  if (loading) return "Loading...";
  if (error) return "Error!";

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

