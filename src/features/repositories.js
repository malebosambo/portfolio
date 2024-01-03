import React from 'react';
import RepoTable from './repoTable';

export default function Repositories() {

  return (
    <>
      <div>
        <h1>@malebosambo</h1>
      </div>

      <div className="RepoFilters">
        <div className="btn-group">
          <button className="btn btn-primary m-2" onClick={() => this.filterIssues("websites")}>Websites</button>
          <button className="btn btn-primary m-2" onClick={() => this.filterIssues("apps")}>Apps</button>
        </div>
      </div>

      <div className="RepoTable">

      </div>
    </>
  )
}
