import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Phone from '../../assets/images/phone.png'
import Key from '../../assets/images/key.png'
import otp from '../../assets/images/otp.png'
import FormNav from '../FormComponents/FormNav'

const ForgotForm = ()=>{
    const schema = yup.object().shape({
        MobileNumber : yup.number().positive().integer().required(),
        Password: yup.string().min(8).max(20).required(),
        Code: yup.string().required(),
    })
    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data)=>{
        console.log(data)
    }
    return(
        <div className="ForgotForm">
            <FormNav Heading="Reset Password" />
            <form className="FormInputs" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-box">
                    <img src={Phone} alt="Mobile" />
                    <input type="text" placeholder='Mobile Number' {...register('MobileNumber')}/>
                    <span>{errors.MobileNumber?.message}</span>
                </div>
                <div className="Verification-box">
                    <div className="Verification-code input-box">
                        <img src={otp} alt="Mobile" />
                        <input type="text" placeholder='Verification Code' {...register('Code')}/>
                        <span>{errors.Code?.message}</span>
                    </div>
                    <button className="otpCode">
                        OTP
                    </button>
                </div>
                <div className="input-box">
                        <img src={Key} alt="Mobile" />
                        <input type="text" placeholder='New Password' {...register('Password')}/>
                        <span>{errors.Password?.message}</span>
                    </div>
                <div className="InputSubmit">
                    <input type="submit" value="Continue" className='register-submit'/>
                </div>
                </form>
        </div>
    )
}
export default ForgotForm