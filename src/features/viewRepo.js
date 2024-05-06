import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IssueTable from './issueTable';

export default function ViewRepo() {

  const [repo,setRepo] = useState({});
  
  const { name } = useParams();

  useEffect(() => {
    const fetchRepo = async (username, reponame) => {

      const response = await fetch(`https://api.github.com/repos/${username}/${reponame}`);

      const repoData = await response.json();

      setRepo(repoData);
    };

    fetchRepo('malebosambo', name);
    
  }, {});  

  return (
    <>
      <div>
        <h1></h1>
      </div>
      <div>
       
      </div>
    </>
  )
}
