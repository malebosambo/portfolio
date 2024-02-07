import React, { useState, useEffect } from 'react';
import IssueItem from './issueItem';

export default function IssueTable() {

  const [issues,setIssues] = useState([]);

  useEffect(() => {
    const fetchRepoIssues = async (username, reponame) => {

      const issueResponse = await fetch(`https://api.github.com/repos/${username}/${reponame}/issues`);

      const issueData = await response.json();

      setIssues(issueData);
    };

    fetchRepoIssues('malebosambo', repo);
  }, []); 


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
            {issues.map((issue) => <IssueItem key={issue.id} title={issue.title} description={issue.body} date={issue.created_at} status={issue.state} />)}
          </tbody>
        </table>
      </div>
    </>
  )
}
