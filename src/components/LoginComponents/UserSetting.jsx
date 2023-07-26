import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { UserContext } from '../../pages/UserProfile'
import SignIn from  '../../assets/images/Sign-in.png'
import Order from '../../assets/images/order.png'
import Promotion from '../../assets/images/Promotion.png'
import RedEnvelope from '../../assets/images/Envelope.png'
import Wallet from '../../assets/images/wallet.png'
import BankCard from '../../assets/images/bankcard.png'
import Address from '../../assets/images/Address.png'
import AccountSecurity from '../../assets/images/Security.png'
import UserDown from '../../assets/images/download-user.png'
import Complaints from '../../assets/images/complaints.png'
import About from '../../assets/images/about.png'
import '../../assets/styles/ComponentStyles/UserSetting.css'

const UserSetting = ()=>{
    const {loginSuccess} = useContext(AppContext)
    const {isSignin,setisSignin} = useContext(UserContext)
    const SigninPOP = ()=>{
        setisSignin(!isSignin)
    }
    return(
        
        <div className={loginSuccess ?"user-nav": "user-navHide"}>
        <ul className="userNav-items">
            <li onClick={SigninPOP}>
                <ol>
                    <img src={SignIn} alt="" />
                    <span>Sign In</span>
                </ol>
                <ol>
                <i class="fa-solid fa-angle-down"></i>
                </ol>
            </li>
            <li>
                <ol>
                    <img src={Order} alt="" />
                    <span>Orders</span>
                </ol>
                <ol>
                <i class="fa-solid fa-angle-down"></i>
                </ol>
            </li>
            <li>
                <ol>
                    <img src={Promotion} alt="" />
                    <span>Promotions</span>
                </ol>
                <ol>
                <i class="fa-solid fa-angle-down"></i>
                </ol>
            </li>
            <li>
                <ol>
                    <img src={RedEnvelope} alt="" />
                    <span>Red Envelope</span>
                </ol>
                <ol>
                <i class="fa-solid fa-angle-down"></i>
                </ol>
            </li>
            <li>
                <ol>
                    <img src={Wallet} alt="" />
                    <span>Wallet</span>
                </ol>
                <ol>
                <i class="fa-solid fa-angle-down"></i>
                </ol>
            </li>
            <li>
                <ol>
                    <img src={BankCard} alt="" />
                    <span>Bank Card</span>
                </ol>
                <ol>
                <i class="fa-solid fa-angle-down"></i>
                </ol>
            </li>
            <li>
                <ol>
                    <img src={Address} alt="" />
                    <span>Address</span>
                </ol>
                <ol>
                <i class="fa-solid fa-angle-down"></i>
                </ol>
            </li>
            <li>
                <ol>
                    <img src={AccountSecurity} alt="" />
                    <span>Account Security</span>
                </ol>
                <ol>
                <i class="fa-solid fa-angle-down"></i>
                </ol>
            </li>
            <li>
                <ol>
                    <img src={UserDown} alt="" />
                    <span>App Download</span>
                </ol>
                <ol>
                <i class="fa-solid fa-angle-down"></i>
                </ol>
            </li>
            <li>
                <ol>
                    <img src={Complaints} alt="" />
                    <span>Complaints & Suggestions</span>
                </ol>
                <ol>
                <i class="fa-solid fa-angle-down"></i>
                </ol>
            </li>
            <li>
                <ol>
                    <img src={About} alt="" />
                    <span>About</span>
                </ol>
                <ol>
                <i class="fa-solid fa-angle-down"></i>
                </ol>
            </li>
        </ul>
    </div>
    )
}
export default UserSetting