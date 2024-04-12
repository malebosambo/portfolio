import React from 'react';
import { useRequestAPI } from '../security/useRequestAPI';
import IssueItem from './issueItem';
import '../styles/tableDesign.css';

export default function IssueTable() {

  const { data, isLoaded, error } = useRequestAPI(
    'https://api.github.com/repos/malebosambo/nava/issues'
  );

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
  
  if (error) {
    return <div>Error: {error}</div>;
  } else if (isLoaded) {
    return <div>Loading...</div>;
  } else {
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
              {data.map((issue) => <IssueItem key={issue.id} title={issue.title} description={issue.body} date={issue.created_at} status={issue.state} />)}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}
