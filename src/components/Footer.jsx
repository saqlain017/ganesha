import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Search from '../assets/images/Search.png'
import Home from '../assets/images/Home.png'
import Win from '../assets/images/win.png'
import UserProfile from '../assets/images/UserProfile.png'
import { AppContext } from '../App'
import '../assets/styles/ComponentStyles/Footer.css'
const Footer = ()=>{
    const {loginSuccess} = useContext(AppContext)
    return(
        <div className="Footer">
            <ul className="footer-links">
                <li><Link to='/'><img src={Home} alt="Home" loading='lazy'/></Link></li>
                <li><Link to='/search'><img src={Search} alt="Home" loading='lazy'/></Link></li>
                <li className={loginSuccess ? "ShowWin" : "HideWin"}><Link to='/win'><img src={Win} alt="Home" loading='lazy'/></Link></li>
                <li><Link to='/mine'><img src={UserProfile} alt="Home" loading='lazy'/></Link></li>
            </ul>
        </div>
    )
}

export default Footer