import React from 'react';

export default function RepoItem(props) {

  return (
    <>
      <tr key={id}>
        <td>{name}</td>
         <td>{description}</td>
          <td>{created_at}</td>
          <td>{topics}</td>
      </tr>
    </>
  )
}