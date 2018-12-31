import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo/fixed-logo-red-82.png'

const Footer = class extends React.Component {

  componentDidMount() {
    
   
  }
 
 render() {
   return (
    <footer class="footer has-background-dark">
      <div class="content has-text-centered has-text-light">
        <p>Follow Us</p>
        <p>
          <a
            href="https://instagram.com/sumofoneorg"
            target="_blank"
            rel="noopener noreferrer"
            style={{padding: '10px', color: 'white'}}
          >
            <span class="icon">
              <i class="fab fa-instagram fa-2x"></i>
            </span>
          </a>
          
          <a
            href="https://facebook.com/sumofoneorg"
            target="_blank"
            rel="noopener noreferrer"
            style={{padding: '10px', color: 'white'}}
          >
            <span class="icon">
              <i class="fab fa-facebook fa-2x"></i>
            </span>
          </a>
        </p>
        <p>Copyright 2019</p>
      </div>
    </footer>
  
  )}
}

export default Footer
