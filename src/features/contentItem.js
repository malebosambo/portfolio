import React from 'react';
import { Link } from 'react-router-dom';

export default function ContentItem({ id, imgUrl, name, url }) {

  return (
    <>
      <div className="card col-lg-3" style={{margin: 10px}} key={id}>
        <div className="Image">
          <img src={imgUrl} className="card-img-top img-responsive" alt={name} />
        </div>
        <div className="card-body">
          <div>
            <h2 className="card-title">{name}</h2>
          </div>
          <hr/>
          <div>
            <p>Services:</p>
            
          </div>
        </div>
        <div>
          <Link className="btn btn-primary" to={url}>View more</Link>
        </div>
      </div>
    </>
  )
}