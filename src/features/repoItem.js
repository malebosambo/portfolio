import React from 'react';
import { Link } from 'react-router-dom';

export default function RepoItem({ id, name, description, date, topics }) {

  const repoName = `/repo/${name}`;
  const formatDate = Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).format(date);

  return (
    <>
      <tr key={id}>
        <td><Link to={repoName}>{name}</Link></td>
        <td>{description}</td>
        <td>{formatDate}</td>
        <td>{topics}</td>
      </tr>
    </>
  )
}