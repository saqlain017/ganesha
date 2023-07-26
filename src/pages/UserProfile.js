import React from 'react'
import { useState, createContext,useContext } from 'react'
import { AppContext } from '../App'
import LoginForm from '../components/LoginComponents/LoginForm'
import Fixed from '../components/Fixed'
import UserInfo from '../components/LoginComponents/UserInfo'
import UserSetting from '../components/LoginComponents/UserSetting'
import Logout from '../components/LoginComponents/Logout'
import ConfirmLogout from '../components/LoginComponents/ConfirmLogout'
import SigninPop from '../components/UserSettingPopups/SigninPop'
import '../assets/styles/PageStyles/UserProfile.css'

export const UserContext = createContext();
export const UserProfile = ()=>{
    const [isValid,setisValid] = useState(false);
    const [isSignin,setisSignin] = useState(false)
    const {loginSuccess} = useContext(AppContext)
    return(
        <UserContext.Provider value={{isValid,setisValid,isSignin,setisSignin}}>
        <div className={loginSuccess ?"UserProfile" : "UserProfileLogin"}>
            <LoginForm />
            <Fixed />
            <UserInfo />
            <UserSetting />
            <Logout />
            <ConfirmLogout />
            <SigninPop />
        </div>
        </UserContext.Provider>
    )

}