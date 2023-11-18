import React from 'react';
import { Link } from 'react-router-dom';
import './homeContentCont.css';

export default function ContentItem({ service }) {
    
  return (
    <>
      <div className="card" style={{margin: "10px"}} key={service.id}>
        <div className="Heading">
            <h2 className="card-title">{service.name}</h2>
        </div>
        <hr/>
        <div className="card-body">
          <p>Services:</p>
            <ul>{service.ops.map((op) => (<li key={op}>{op}</li>))}</ul>
        </div>
        <div className="Image">
          <img src={service.imgUrl} className="card-img-top" alt={service.name} />
        </div>
        <div className="ContentLink">
          <Link to={service.url} className="card-link">View more</Link>
        </div>
      </div>
    </>
  );
}