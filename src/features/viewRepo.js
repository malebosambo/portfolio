import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IssueTable from './issueTable';

export default function ViewRepo() {

  const [repo,setRepo] = useState({});
  
  const { name } = useParams();

  const { data, isLoaded, error } = useRequestAPI(
    `https://api.github.com/repos/malebosambo/${name}`
  );

  /*useEffect(() => {
    const fetchRepo = async (username, reponame) => {

      const response = await fetch(`https://api.github.com/repos/${username}/${reponame}`);

      const repoData = await response.json();

      setRepo(repoData);
    };

    fetchRepo('malebosambo', name);
    
  }, {});*/
  
  if (error) {
    return <div>Error: {error}</div>
  } else if (isLoaded) {
    return <div>Loading...</div>
  }  else { 
  return (
    <>
      <div>
        <h1>{repo.name}</h1>
      </div>
      <div>
       
      </div>
    </>
  )
}
