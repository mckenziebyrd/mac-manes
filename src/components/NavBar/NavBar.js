import React from 'react'
import "./NavBar.css"
import "./Button.css"
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className='NavBarItems'>
        <Link className='nav-home' to="./home">
        <h1 className='navbar-logo'>Mac Manes</h1>
        </Link>
        <ul className='nav-menu'>
          <a className="nav-links" target="_blank" href="https://www.instagram.com/mac.manes/?hl=en">INSTAGRAM</a>
        <Link className='nav-links' to="/requests">
          <li>REQUESTS</li>
          </Link>
        <Link className='nav-links' to="/messages">
          <li>MESSAGES</li>
          </Link>
         <Link className="nav-links" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("manes_user")
                    }
                }
                >
                  <li>LOG OUT</li></Link>
            
            </ul>
    </nav>
  )
}

export default NavBar