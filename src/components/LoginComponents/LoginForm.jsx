import React from 'react'
import { AppContext } from '../../App'
import { useContext} from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import FormNav from '../FormComponents/FormNav'
import Phone from '../../assets/images/phone.png'
import key from '../../assets/images/key.png'
import axios from 'axios'
import '../../assets/styles/ComponentStyles/LoginForm.css'


const LoginForm = ()=>{
    const {loginSuccess,setloginSuccess,Token,setToken} = useContext(AppContext);
    const schema = yup.object().shape({
        email : yup.string().email().required(),
        password: yup.string().required()
    })
    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    })
    async function onSubmit(data) {
        try {
          console.log(data);
          await axios.post('http://frontend.appswebdevelopment.com/public/api/login', data).then((res)=>{
            setloginSuccess(!loginSuccess)
            console.log("res?.data ", res);
            setToken(res?.data?.token)
            console.log(Token)
          });
        } catch (error) {
          console.error('Request failed:', error);
        }
      }
    return(
        <div className={loginSuccess? "LoginFormHide" : "LoginForm"}>
            <FormNav Heading="Login"/>
            <form className="FormInputs" onSubmit={handleSubmit(onSubmit)}>
                <div className="IdInput input-box">
                    <img src={Phone} alt="Mobile" />
                    <input type="text" placeholder='Mobile Number' {...register('email')}/>
                    <span>{errors.email?.message}</span>
                </div>
                <div className="PasswordInput input-box">
                    <img src={key} alt="Mobile" />
                    <input type="text" placeholder='Password' {...register('password')}/>
                    <span>{errors.password?.message}</span>
                </div>
                <div className="InputSubmit">
                    {/* <input type="submit" value="Login"/> */}
                    <button type='submit'>Login</button>
                </div>
                <div className="InputSubmit">
                    <div className="NewUser ForgotPass">
                        <Link to="/register"><button>Register</button></Link>
                        <Link to='/forgotPass'><button>Forgot Password?</button></Link>
                    </div>  
                </div>
            </form>
        </div>
    )
}
export default LoginForm