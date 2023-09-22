import React, { useState, useEffect } from 'react';
import IssueItem from './issueitem';
import './latestIssues.css';

export default function LatestIssues() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://api.github.com/repos/malebosambo/portfolio/issues");
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterIssues = (name, e) => {
    console.log(`Filter button pressed: ${name}`);
    console.log(e.target);
  }
  
  return (
    <>
      <div className="Section">
        <h1>Latest Issues</h1>
          
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
              {data.map((issue) => (<IssueItem issue={issue} />))}
            </tbody>
          </table>
        </div>

      </div>
    </>  
  );
}

