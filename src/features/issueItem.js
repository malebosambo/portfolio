import React from 'react';

export default function IssueItem(props) {

  return (
    <>
      <tr key={issue.id}>
        <td>{issue.title}</td>
         <td>{issue.description}</td>
          <td>{issue.collaborator}</td>
          <td>{issue.status}</td>
          <td>{issue.project}</td>
          <td>{issue.type}</td>
      </tr>
    </>
  )
}