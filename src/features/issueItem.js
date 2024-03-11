import React from 'react';

export default function IssueItem({ id, title, description, date, status }) {

  return (
    <>
      <tr key={id}>
        <td>{title}</td>
        <td>{description}</td>
        <td>{date}</td>
        <td>{status}</td>
      </tr>
    </>
  )
}
