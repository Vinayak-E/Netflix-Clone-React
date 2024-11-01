import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login,signup} from '../../firebase'
import netflixSpinner from '../../assets/netflix_spinner.gif'

const Login = () => {
const [signState,setSignState] = useState('Sign In')
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [loading,setLoading] = useState(false)

const userAuth =  async (event) =>{
  event.preventDefault();
  setLoading(true);
  if(signState === "Sign In"){
    await login(email,password)
  }else{
    await signup(name,email,password)
  }
  setLoading(false);
}
  return (
    loading?<div className="login-spinner">
      <img src={netflixSpinner} alt="" />
    </div>:
    <div  className='login'>
      <img src={logo} alt=""  className='login-logo w-[150px]'/>
      <div className="login-form w-full ">
        <h1 className='text-[32px] '>{signState} </h1>
        <form >
          {signState === "Sign Up" ?<input value={name} onChange={(e)=>{setName(e.target.value)}}   type="text" placeholder='Your Name' />:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}}  type="email" name="" placeholder='Email' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder='Password' />
          <button onClick={userAuth} type='submit'>{signState}</button>
          <div className="form-help flex items-center justify-between ">
            <div className="remember flex items-center gap-[5px] ">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help!</p>
          </div>
        </form>
        <div className="form-switch mt-10 ">
          {signState === "Sign In" ?<p>New to Netflix ?  <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have account ?  <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>} 
        </div>
      </div>

    </div>
  )
}

export default Login