import React, { useState, useEffect } from 'react';
import IssueItem from './issueItem';

export default function IssueTable() {

  /*
  const [issues,setIssues] = useState(issues);

  useEffect(() => {
    const fetchRepoIssues = async (username, reponame) => {

      const response = await fetch(`https://api.github.com/repos/${username}/${reponame}/issues`);

      const issueData = await response.json();

      setIssues(issueData);
    };

    fetchRepoIssues('malebosambo', 'portfolio');
  }, []); 
  */

  return (
    <>
      <div className="TableResponse">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Created Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </>
  )
}
