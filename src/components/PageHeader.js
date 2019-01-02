import React from 'react'

export default props => (
  <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <div
              className="full-width-image-container margin-top-0"
              style={{
                backgroundImage: `url(${
                  props.headerImage
                })`,
                marginBottom: 0
              }}
          >
          <h2
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            {props.title}
          </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
)