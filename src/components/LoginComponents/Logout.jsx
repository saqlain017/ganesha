import React from 'react'
import { UserContext } from '../../pages/UserProfile'
import { useContext } from 'react'
import '../../assets/styles/ComponentStyles/Logout.css'
import { AppContext } from '../../App'

const Logout = ()=>{
    const {isValid,setisValid} = useContext(UserContext)
    const {loginSuccess} = useContext(AppContext);
    const PopUp = ()=>{
        setisValid(!isValid)
    }
    return(
        <div className={loginSuccess ? "user-logout" : "user-logout-hide"}>
                <button onClick={PopUp}>Logout</button>
        </div>
    )
}
export default Logout