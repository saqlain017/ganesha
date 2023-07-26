import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import chat from '../assets/images/chat.png'
import { AppContext } from '../App'
import '../assets/styles/ComponentStyles/Fixed.css'

const Fixed = ()=>{
    const {loginSuccess} = useContext(AppContext)
    return (
        <div className={loginSuccess ? "Fixed" : "FixedClose"}>
            <Link to='/'><img src={chat} alt="CustomerSupport" />Online</Link>
        </div>
    )
}
export default Fixed