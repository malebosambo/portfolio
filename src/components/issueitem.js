import React from 'react';

export default function IssueItem(props) {
  const {issue} = this.props;
    
  return (
    <>
      <tr key={issue.id}>
        <td>{issue.id}</td>
        <td>{issue.name}</td>
        <td></td>
        <td></td>
      </tr>
    </>
  );
}
