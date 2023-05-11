import React, { Component } from 'react';
import 'homeContentCont.css';

class ContentItem extends Component {
  render() {
    const content = this.props;
    
    return (
      <>
        <div className="Service" key={content.id}>
          <div className="Heading">
            <h2>{content.name}</h2>
          </div>
          <hr/>
          <div className="Benefits">
            <p>Services:</p>
            <ul>{content.ops.map( (op) => <li key={op}>{op}</li>)}</ul>
          </div>
          <div className="Image">
            <img src={content.imgUrl} alt={content.name} />
          </div>
          <div className="Link">
            <Link to={content.url}>View more</Link>
          </div>
        </div>
      </>
    )
  }
}

export default ContentItem;