import React from 'react';
import {Link} from 'react-router-dom';

export default function RepoItem({ id, name, description, date, topics }) {

  return (
    <>
      <tr key={id}>
        <td><Link href="/repo/{name}">{name}</Link></td>
        <td>{description}</td>
        <td>{date}</td>
        <td>{topics}</td>
      </tr>
    </>
  )
}