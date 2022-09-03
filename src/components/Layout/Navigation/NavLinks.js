import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'

const logout = () => {
  console.log('logging out')
  signOut(auth);
  sessionStorage.removeItem('Auth Token');
  console.log('logged out');
}

const NavLink = (props) => {
  const { linkTxt, link, id } = props
  if (id==='logout') {
    return (
      <a className='nav-link' href={link} onClick={logout}>
        <li>{linkTxt}</li>
      </a>
    )
  } else if (id === 'userDp') {
    return (
    <a className='nav-link' href={link}>
      <img style={{height: "100%"}} src='./media/dash-dp2.png' alt='profile'/>
    </a>
    )
  } else {
    return (
      <a className='nav-link' href={link}>
        <li>{linkTxt}</li>
      </a>
    )
  }
}

const NavLinks = (props) => {
  const { links } = props
  const navInner = links.map((link, i) => {
    return <NavLink key={i} linkTxt={link.linkTxt} link={link.link} id={link.id} />
  });
  return (
    <ul className='nav-links'>
      {navInner}
    </ul>
  )
}

export default NavLinks