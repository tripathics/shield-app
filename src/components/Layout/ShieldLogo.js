import React from 'react'
import { ReactComponent as SHIELD_LOGO } from '../../assets/logo.svg'
import '../../ShieldLogo.css'

const ShieldLogo = (props) => {
    const { fill, width, height, textColor } = props;
    return (
        <div className='ShieldLogo'>
            <p style={{color: textColor, height: height}}>
                <SHIELD_LOGO className='logoSvgImg' fill={fill} width={width} height={height}/>
                <span className='ShieldLogoTxt'>SHEILD</span>
            </p>
        </div>
    )
}

export default ShieldLogo