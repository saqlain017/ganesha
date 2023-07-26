import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Phone from '../../assets/images/phone.png'
import Key from '../../assets/images/key.png'
import otp from '../../assets/images/otp.png'
import referral from '../../assets/images/referral.png'
import FormNav from '../FormComponents/FormNav'
import '../../assets/styles/ComponentStyles/RegisterForm.css'

const RegisterForm = ()=>{
    const schema = yup.object().shape({
        MobileNumber : yup.number().positive().integer().required(),
        Password: yup.string().min(8).max(20).required(),
        Code: yup.string().required(),
        Referral: yup.string().required(),
        Check: yup.boolean().oneOf([true],"You must agree to terms and conditions").required(),
    })
    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data)=>{
        console.log(data)
    }
    return(
        <div className="RegisterForm">
            <FormNav Heading="Register" />
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
                        <input type="text" placeholder='Password' {...register('Password')}/>
                        <span>{errors.Password?.message}</span>
                    </div>
                <div className="input-box">
                        <img src={referral} alt="Mobile" />
                        <input type="text" placeholder='Referral Code' {...register('Referral')}/>
                        <span>{errors.Referral?.message}</span>
                    </div>
                <div className="agreementBox">
                    <div className="check-box">
                        <div className="input-radio">
                            <input type="checkbox" {...register('Check')}/>
                            <span className='error'>{errors.Check?.message}</span>
                        </div>
                        <label htmlFor="checkbox">I agree <span>Privacy Policy</span></label>
                    </div>
                </div>
                <div className="InputSubmit RegisterSubmit">
                    <input type="submit" value="Register" className='register-submit'/>
                </div>
            </form>
        </div>
    )
}
export default RegisterForm