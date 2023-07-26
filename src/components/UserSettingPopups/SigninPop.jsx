import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../pages/UserProfile'
import '../../assets/styles/ComponentStyles/SigninPop.css'
const SigninPop = ()=>{
    const {isSignin,setisSignin} = useContext(UserContext)
    const SigninCancel = ()=>{
        setisSignin(!isSignin)
    }
    const SignInDone = ()=>{
        setisSignin(!isSignin)
        console.log("SignInDone")
    }
    return(
        <div className={isSignin ? "SigninPop" : "SigninHide"}>
            <div className="SigninPopUp">
                <p className='title-pop'>Sign In</p>
                <ul>
                    <li>Total： Days</li>
                    <li>Today Rebates：₹ </li>
                    <li>Today Rebates：₹ </li>
                    <li>Status：Had signed in</li>
                </ul>
                <div className="popUpButtons">
                    <button className='signCancel' onClick={SigninCancel}>Cancel</button>
                    <button onClick={SignInDone}>Sign In</button>
                </div>
            </div>
        </div>
    )
}
export default SigninPop