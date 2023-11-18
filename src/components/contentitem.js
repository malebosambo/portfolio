import React from 'react';
import { Link } from 'react-router-dom';
import './homeContentCont.css';

export default function ContentItem({ props }) {
    
  return (
    <>
      <div className="card" style={{margin: "10px"}} key={props.id}>
        <div>
            <h2 className="card-title">{props.name}</h2>
        </div>
        <hr/>
        <div className="card-body">
          <p>Services:</p>
           
        </div>
        <div className="Image">
          <img src={props.imgUrl} className="card-img-top" alt={props.name} />
        </div>
        <div className="ContentLink">
          <Link to={props.url} className="card-link">View more</Link>
        </div>
      </div>
    </>
  );
}