import React from 'react'
import ShieldLogo from '../ShieldLogo'
import NavLinks from './NavLinks'

import '../../../scss/Navigation.scss'

const Nav = (props) => {
  const { navLinks } = props
  return (
    <nav id="nav-bar" className='app-nav'>
      <ShieldLogo fill="#00f" height="100%" textColor="black" />
      <NavLinks links={navLinks} />
    </nav>
  )
}

export default Nav