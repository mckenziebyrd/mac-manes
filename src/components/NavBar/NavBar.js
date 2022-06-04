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
        <Link className='nav-links' to="/requests">
          <li className='nav-links'>REQUESTS</li>
          </Link>
        <Link className='nav-links' to="/messages">
          <li className='nav-links'>MESSAGES</li>
          </Link>
         <Link className="nav-links" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("manes_user")
                    }
                }
                >LOG OUT</Link>
            
            </ul>
    </nav>
  )
}

export default NavBar