import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homeContentCont.css';

export default function ContentItem(props) {
   
  const content = props;
 
  return (
    <>
      <div className="card col-sm-2" style={{margin: "10px"}} key={content.id}>
        <div className="Image">
          <img src={content.imgUrl} className="card-img-top img-responsive" alt={content.name} />
        </div>
        <div className="card-body">
          <div className="Heading">
            <h2>{content.name}</h2>
          </div>
          <hr/>
          <div className="Benefits">
            <p>Services:</p>
            <ul>{content.ops.map((op) => (<li key={op}>{op}</li>))}</ul>
          </div>
        </div>
        <div className="ContentLink">
          <Link className="btn btn-primary" to={content.url}>View more</Link>
        </div>
      </div>
    </>
  )
}