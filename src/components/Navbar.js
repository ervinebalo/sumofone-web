import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo/fixed-logo-red-82.png'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand" >
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="Sum of One logo" style={{ maxHeight: '40px', marginBottom: '0'}}/>
        </Link>
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start  ">
          <Link className="navbar-item is-uppercase has-text-weight-bold" to="/">
            Home
          </Link>
          <Link className="navbar-item is-uppercase has-text-weight-bold" to="/about">
            About
          </Link>
          <Link className="navbar-item is-uppercase has-text-weight-bold" to="/projects">
            Projects
          </Link>
          <Link className="navbar-item is-uppercase has-text-weight-bold" to="/invest">
            Invest
          </Link>
          {/* <Link className="navbar-item" to="/products">
            Products
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
          <Link className="navbar-item" to="/contact/examples">
            Form Examples
          </Link>
          <Link className="navbar-item" to="/test">
            Test
          </Link> */}
        </div>
        <div className="navbar-end has-text-centered">
          <a
            className="navbar-item is-hidden-touch"
            href="https://instagram.com/sumofoneorg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-instagram fa-2x"></i>
            </span>
          </a>
          
          <a
            className="navbar-item is-hidden-touch"
            href="https://facebook.com/sumofoneorg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-facebook fa-2x"></i>
            </span>
          </a>
        </div>  
      </div>
    </div>
  </nav>
  )}
}

export default Navbar
