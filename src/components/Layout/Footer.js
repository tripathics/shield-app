import React from 'react'
import ShieldLogo from './ShieldLogo'
// import '../../Footer.css'
import '../../scss/Footer.scss'

import { ReactComponent as FbIcon } from '../../assets/social/fb.svg'
import { ReactComponent as TwitterIcon } from '../../assets/social/twitter.svg'
import { ReactComponent as GithubIcon } from '../../assets/social/github.svg'

const Footer = () => {
    return (
        <footer className='app-footer'>
            <div className="container">
                <div className="first">
                    <ShieldLogo fill="white" textColor="white" height="53" width="53"/>
                    <div className="social">
                        <a href="https://facebook.com" className="fb">
                            <FbIcon className='socialSvg' />
                        </a>
                        <a href="https://facebook.com" className="twitter">
                            <TwitterIcon className='socialSvg' />
                        </a>
                        <a href="https://facebook.com" className="github">
                            <GithubIcon className='socialSvg' />
                        </a>
                    </div>
                </div>
                <div>
                    <p className='ftr-copy'>&copy; SHIELD 2022 - Present</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer