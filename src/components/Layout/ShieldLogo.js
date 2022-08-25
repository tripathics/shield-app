import React from 'react'
import { ReactComponent as SHIELD_LOGO } from '../../assets/logo.svg'
import '../../scss/ShieldLogo.scss'

const ShieldLogo = (props) => {
    const { fill, width, height, textColor } = props;
    return (
        <a href='/' className='ShieldLogo'>
                <p style={{color: textColor, height: height}}>
                    <SHIELD_LOGO className='logoSvgImg' fill={fill} width={width} height={height}/>
                    <span className='ShieldLogoTxt'>SHEILD</span>
                </p>
        </a>
    )
}

export default ShieldLogo