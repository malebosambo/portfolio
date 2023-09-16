import React from 'react';

export default function IssueItem(props) {
  const {issue} = this.props;
    
  return (
    <>
      <tr key={issue.id}>
        <td>{issue.title}</td>
        <td>{issue.body}</td>
        <td>{issue.assignees[0]}</td>
        <td>{issue.state}</td>
      </tr>
    </>
  );
}
