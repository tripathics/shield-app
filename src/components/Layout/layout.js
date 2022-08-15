import React from 'react'
import Nav from './Navigation/Navigation'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
            <Nav navLinks={[
                {
                    linkTxt: "Sign in",
                    link: '/login'
                }
            ]} 
            />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout