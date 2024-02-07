import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function viewRepo() {

  const [repo,setRepo] = useState({});
  const [issues,setIssues] = useState([]);
  const { repo } = useParams();

  useEffect(() => {
    const fetchRepo = async (username) => {
      const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const repoData = await response.json();
      setRepo(repoData);
    };

    const fetchRepoIssues = async (username, reponame) => {
      const issueResponse = await fetch(`https://api.github.com/repos/${username}/${reponame}/issues`);
      const issueData = await response.json();
      setIssues(issueData);
    };

    fetchRepo('malebosambo');
    fetchRepoIssues('malebosambo', repo);
  }, []);  
  
  return (

  )
}
