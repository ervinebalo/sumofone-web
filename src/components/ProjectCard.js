import React from 'react'

export default props => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={props.mainImage} alt="props.title" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{props.title}</p>
          <p className="subtitle is-6">{props.year}</p>
        </div>
      </div>

      <div className="content">
        {props.shortDescription}
      </div>
    </div>
    <footer className="card-footer">
      <div className="card-footer-item">
        <span>
          <a href={props.projectUrl}>Learn More</a>
        </span>
      </div>
    </footer>
  </div>
)