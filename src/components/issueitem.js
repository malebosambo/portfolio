import React from 'react';

const issueItem = (props) {
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
  )
}

export default IssueItem;
