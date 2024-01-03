import React from 'react';

export default function RepoItem({ id, name, description, date, topics }) {

  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>{description}</td>
        <td>{date}</td>
        <td>{topics}</td>
      </tr>
    </>
  )
}