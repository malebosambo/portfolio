import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homeContentCont.css';

export default function ContentItem(props) {
    
  return (
    <>
      <div className="col-sm-2" style={{margin: "10px"}} key={content.id}>
        <div className="Heading">
            <h2>{content.name}</h2>
        </div>
        <hr/>
        <div className="Benefits">
          <p>Services:</p>
            <ul>{content.ops.map((op) => (<li key={op}>{op}</li>))}</ul>
        </div>
        <div className="Image">
          <img src={content.imgUrl} className="img-responsive img-rounded" alt={content.name} />
        </div>
        <div className="ContentLink">
          <Link to={content.url}>View more</Link>
        </div>
      </div>
    </>
  )
}