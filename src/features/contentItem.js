import React from 'react';
import { Link } from 'react-router-dom';

export default function ContentItem(props) {
   
  const content = props;
 
  return (
    <>
      <div className="card col-sm-2" style={{margin: "10px"}} key={content.id}>
        <div className="Image">
          <img src={content.imgUrl} className="card-img-top img-responsive" alt={content.name} />
        </div>
        <div className="card-body">
          <div>
            <h2 className="card-title">{content.name}</h2>
          </div>
          <hr/>
          <div>
            <p>Services:</p>
            <ul class name="list-group list-group-flush">{content.ops.map((op) => (<li class name="list-group-item" key={op}>{op}</li>))}</ul>
          </div>
        </div>
        <div>
          <Link className="btn btn-primary" to={content.url}>View more</Link>
        </div>
      </div>
    </>
  )
}