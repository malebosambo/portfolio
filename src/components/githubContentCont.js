import React, { useState, useEffect } from 'react';

export default function Github {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });


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
