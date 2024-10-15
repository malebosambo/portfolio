import React from 'react';

export default function RepoItem({ id, name, description, date, topics, link }) {

  return (
    <>
      <tr key={id}>
        <td><a target="_blank" rel="noopener noreferrer" href={link} >{name}</a></td>
        <td>{description}</td>
        <td>{date}</td>
        <td>{topics}</td>
      </tr>
    </>
  )
}
