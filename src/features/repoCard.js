import React from "react";

export async function RepoCard({ name, description, link, }) {

  return (
    <div className="card">
      <div className="card-header">Trending</div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a target="_blank" rel="noopener noreferrer" href={link} className="btn btn-primary">View</a>
      </div>
    </div>
  );
}
