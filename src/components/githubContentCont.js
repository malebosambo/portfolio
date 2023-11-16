import React, { useState, useEffect } from 'react';
import { getDatabase } from '.../lib/github';

export default function Github {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

        await octokit.request('GET
        /orgs/{org}/repos', { 

      } catch (error) {
      
      }
    })()
  })

  return (
    <>
      <h1>GitHub Stats</h1>
        
    </>
  )
}
