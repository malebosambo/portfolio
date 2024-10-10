import React from 'react';
import RepoTable from './repoTable';

export default function Repositories() {

  return (
    <>
      <div>
        <div className="Repo_Banner">
          <h1>GitHub Repos</h1>
        </div>

        {/*
        <div className="RepoFilters">
          <div className="btn-group">
            <button className="btn btn-primary m-2" onClick={() => this.filterIssues("websites")}>Websites</button>
            <button className="btn btn-primary m-2" onClick={() => this.filterIssues("apps")}>Apps</button>
          </div>
        </div>
        */}

        <div className="Repo_Table">
          <RepoTable />
        </div>
      </div>
    </>
  )
}
