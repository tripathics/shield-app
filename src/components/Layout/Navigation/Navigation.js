import React from 'react'
import ShieldLogo from '../ShieldLogo'

import '../../../Navigation.css'
import NavLinks from './NavLinks'

const Nav = (props) => {
  const { navLinks } = props
  return (
    <nav id="nav-bar">
      <a href='/' className='nav-logo'>
        <ShieldLogo fill="#00f" height="100%" textColor="black" />
      </a>
      <NavLinks links={navLinks} />
    </nav>
  )
}

export default Nav