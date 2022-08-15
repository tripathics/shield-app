import React from 'react'
import '../../../Navigation.css'

const NavLink = (props) => {
  const { linkTxt, link } = props
  return (
    <a className='nav-link' href={link}><li>{linkTxt}</li></a>
  )
}

const NavLinks = (props) => {
  const { links } = props
  const navInner = links.map(link => {
    return <NavLink linkTxt={link.linkTxt} link={link.link} />
  });
  return (
    <ul className='nav-links'>
      {navInner}
    </ul>
  )
}

export default NavLinks