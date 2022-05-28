import React from 'react'
import "./NavBar.css"
import "./Button.css"

const NavBar = () => {

  return (
    <nav className='NavBarItems'>
        <h1 className='navbar-logo'>Mac Manes</h1>
        <ul className='nav-menu'>
          <li className='nav-links'>MESSAGES</li>
         </ul>
        <button className='btn'>Log Out</button>
    </nav>
  )
}

export default NavBar