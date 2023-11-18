import React from 'react';
import { Link } from 'react-router-dom';
import './homeContentCont.css';

export default function ContentItem({ service }) {
    
  return (
    <>
      <div className="col-sm-2" style={{margin: "10px"}} key={service.id}>
        <div className="Heading">
            <h2>{service.name}</h2>
        </div>
        <hr/>
        <div className="Benefits">
          <p>Services:</p>
            <ul>{service.ops.map((op) => (<li key={op}>{op}</li>))}</ul>
        </div>
        <div className="Image">
          <img src={service.imgUrl} className="img-responsive img-rounded" alt={service.name} />
        </div>
        <div className="ContentLink">
          <Link to={service.url}>View more</Link>
        </div>
      </div>
    </>
  );
}