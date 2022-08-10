import React from 'react'
import Nav from './Navigation'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <main className="container">{children}</main>
            <Footer />
        </>
    )
}

export default Layout