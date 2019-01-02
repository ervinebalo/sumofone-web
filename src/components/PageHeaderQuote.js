import React from 'react'

export default props => (
  <div className="container">
    <div className="section">
      <h2 className="title is-2 has-text-grey-dark has-text-weight-light has-text-centered is-uppercase">
        {props.quote}
      </h2>
      <h3 className="subtitle has-text-centered has-text-grey">{props.author}</h3>
    </div>
  </div>
)