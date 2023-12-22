import React from 'react';
import { Link } from 'react-router-dom';

export default function ContentItem(props) {


 
  return (
    <>
      <div className="card col-sm-2" style={{margin: "10px"}} key={props.id}>
        <div className="Image">
          <img src={props.imgUrl} className="card-img-top img-responsive" alt={props.name} />
        </div>
        <div className="card-body">
          <div>
            <h2 className="card-title">{props.name}</h2>
          </div>
          <hr/>
          <div>
            <p>Services:</p>
            
          </div>
        </div>
        <div>
          <Link className="btn btn-primary" to={props.url}>View more</Link>
        </div>
      </div>
    </>
  )
}