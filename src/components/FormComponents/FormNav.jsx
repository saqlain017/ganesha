import React from 'react'
import {useNavigate} from 'react-router-dom'
import Back from '../../assets/images/arrowBack.png'
import '../../assets/styles/ComponentStyles/FormNav.css'
const FormNav = (props)=>{
    const History = useNavigate();
    const handleBack = ()=>{
        History(-1);
    }
    return(
        <div className="LoginFormNav">
                <div className="LoginFormNavItems">
                    <button className='backButton' onClick={handleBack}><img src={Back} alt="ArrowBack" loading='lazy'/></button>
                    <span>{props.Heading}</span>
                </div>
            </div>
    )
}
export default FormNav