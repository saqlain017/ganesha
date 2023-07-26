import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App'
import Avatar from '../../assets/images/Avatar.png'
import Notice from '../../assets/images/Notice.png'
import '../../assets/styles/ComponentStyles/UserInfo.css'
const UserInfo = ()=>{
    const {loginSuccess} = useContext(AppContext)
    return(
        <div className={loginSuccess ?"userInfo": "UserInfoHide"}>
                <div className="userDetails">
                    <div className="userID">
                        <img src={Avatar} alt="UserProfile" />
                        <ul>
                            <li>User：917846828014</li>
                            <li>ID：4559708</li>
                        </ul>
                    </div>
                    <div className="userNotifications">
                        <div className="notice-icon">
                            <img src={Notice} alt="Notification" />
                        </div>
                    </div>
                </div>
                <div className="userBalance">
                    <div className="b-c-t">
                        <div className="b-cash">
                        ₹ 7.25
                        </div>
                        Balance
                        <button>
                        Recharge
                        </button>
                    </div>
                    <div className="b-c-t">
                    <div className="b-cash">
                        ₹ 0.00
                        </div>
                        Commission
                        <button>
                        See
                        </button>
                    </div>
                    <div className="b-c-t">
                    <div className="b-cash">
                        ₹ 0.00
                        </div>
                        Interest
                        <button>
                        See
                        </button>
                    </div>
                </div>
            </div>
    )
}
export default UserInfo