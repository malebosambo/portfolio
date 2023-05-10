import React, { Component } from 'react';

class IssueItem extends Component {
  render() {
      const {issue} = this.props;
    
    return (
      <>
        <tr key={issue.id}>
          <td>{issue.title}</td>
          <td>{issue.description}</td>
          <td>{issue.collaborator}</td>
          <td>{issue.status}</td>
          <td>{issue.project}</td>
        </tr>
      </>
    )
  }
}

export default IssueItem;