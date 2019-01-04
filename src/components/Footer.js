import React from 'react'

const Footer = class extends React.Component {

  componentDidMount() {
    
   
  }
 
 render() {
   return (
    <footer className="footer has-background-dark">
      <div className="container">
        <div className="columns ">
          <div className="column has-text-light">
            <p>Copyright 2019</p>
          </div>
          <div className="column has-text-right">
            {/* <p>Connect With Us</p> */}
            <p>
              <a
                href="https://instagram.com/sumofoneorg"
                target="_blank"
                rel="noopener noreferrer"
                style={{padding: '10px', color: 'white'}}
              >
                <span className="icon">
                  <i className="fab fa-instagram fa-2x"></i>
                </span>
              </a>
              
              <a
                href="https://facebook.com/sumofoneorg"
                target="_blank"
                rel="noopener noreferrer"
                style={{padding: '10px', color: 'white'}}
              >
                <span className="icon">
                  <i className="fab fa-facebook fa-2x"></i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  
  )}
}

export default Footer
