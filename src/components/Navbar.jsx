import React from 'react'
import Logo from '../assets/images/logo.png'
import download from '../assets/images/download.png'
import '../assets/styles/ComponentStyles/Navbar.css'

const Navbar = ()=>{
    return(
        <div className="Navbar">
            <div className="Navbar-logo">
                <img src={Logo} alt="Logo" loading='lazy'/>
            </div>
            <span>Open with an App</span>
            <div className="download-button">
            <a data-v-68d7bcd4="" target="_self" href="/testapp_1.0.0.apk" download="app.apk"><img src={download} alt="" /></a>
            </div>
        </div>
    )
}

export default Navbar