import React, { useState, useEffect } from 'react';
import { useReqObjAPI } from '../security/useReqObjAPI';
import { Link, useParams } from 'react-router-dom';
import IssueTable from './issueTable';

export default function ViewRepo() {

  const [ repo, setRepo ] = useState({});
  let { name } = useParams();
  console.log(name);

  /*
  const { data, isLoaded, error } = useReqObjAPI(
    `https://api.github.com/repos/malebosambo/${name}`
  );
  */

  useEffect(() => {
    const fetchRepo = async (username, reponame) => {
      const response = await fetch(`https://api.github.com/repos/${username}/${reponame}`);

      const data = await response.json();
      console.log(data);
      setRepo(data);
    };

    fetchRepo('malebosambo', name);
    
  }, {});
  
  return (
    <>
      <div>
        <h1>{repo.name}</h1><br />
      </div>
      <div>
        <IssueTable repoName={name} />
      </div>  
    </>
  )
}
