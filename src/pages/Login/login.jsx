import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
        <div className='loginwrapper'>
            <span>Enter Your UserName:</span>
            <input type="text" className='logininp' placeholder='username'/>
            <span>Enter Your Password:</span>
            <input type="password"  className='logininp' placeholder='password'/>
            <button className='subbtn'>LogIn</button>
            <span>If you are coming here for ther first Time <Link>SignUp</Link></span>
        </div>
    </div>
  )
}

export default Login
