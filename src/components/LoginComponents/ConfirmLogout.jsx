import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../pages/UserProfile'
import { AppContext } from '../../App'
import '../../assets/styles/ComponentStyles/ConfirmLogout.css'

const ConfirmLogout = ()=>{
    const {isValid,setisValid} = useContext(UserContext);
    const {loginSuccess,setloginSuccess} = useContext(AppContext)
    const popHide = ()=>{
        setisValid(!isValid)
    }
    const logOut = ()=>{
        setisValid(!isValid)
        setloginSuccess(!loginSuccess)
    }
    return(
        <div className={isValid ? "ConfirmPopUp" : "ConfirmPopHide"}>
            <div className="ConfirmLogout">
            <h4>Confirm</h4>
            <p>Do you want to Logout?</p>
            <div className="Confirm-buttons">
                <button className='cancel' onClick={popHide}>Cancel</button>
                <button className='Yes' onClick={logOut}>Yes</button>
            </div>
        </div>
        </div>
    )
     }
export default ConfirmLogout