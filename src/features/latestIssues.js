import React from 'react';
import RepoItem from './repoItem';
import '../styles/latestIssues.css';
import '../App.css';

export default function RepoTable() {

  return (
    <>
      <div className="TableResponse">
        <table>
          <thead>
            <tr>
              <th>Name</th>
               <th>Description</th>
              <th>Create Date</th>
              <th>Topics</th>
            </tr>
          </thead>
          <tbody>
          
          </tbody>
        </table>
      </div>
    </>
  )
}







