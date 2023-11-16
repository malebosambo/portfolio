import React, { useState, useEffect } from 'react';
import { getDatabase } from '../lib/github';
import IssueItem from './issueitem';
import 'latestIssues.css';

export default function Github() {
  const [loading, setLoading] = useState(false);

  const issues = getDatabase();

  return (
    <>
      <h1>GitHub Stats</h1>
      <div className="Section">
        <h3>Latest Issues</h3>

        <div className="btn-group">
          <button className="btn btn-primary m-2" onClick={(e) => this.filterIssues("websites")}>Web</button>
          <button className="btn btn-primary m-2" onClick={(e) => this.filterIssues("apps")}>Mobile</button>
        </div>

        <div className="TableResponse">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
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

  )
}
