import React from 'react'
import Nav from './Navigation/Navigation'
import Footer from './Footer'

const Layout = (props) => {
    const { navLinks, children } = props
    return (
        <>
            <Nav navLinks={navLinks} />
            <main className='app-main'>{children}</main>
            <Footer />
        </>
    )
}

export default Layout