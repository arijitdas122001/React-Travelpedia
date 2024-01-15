import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { login } from '../../redux-store/reducers/authreducer';
import axios from 'axios';
const Login = () => {
  const [username,setusername]=useState("");
  const [password,setPassword]=useState("");
  const [errr,seterr]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogIn=async()=>{
    try{
    const res=await axios.post(`${import.meta.env.VITE_PORT_NO}/auth/login`,{
      userName:username,
      password:password
    });
    dispatch(login(res.data.details.userName));
    navigate('/');
  }
  catch(error){
    seterr(true);
  }
  }
  return (
    <div className='login'>
        <div className='loginwrapper'>
            <span>Enter Your UserName:</span>
            <input type="text" className='logininp' placeholder='username' onChange={(e)=>setusername(e.target.value)}/>
            <span>Enter Your Password:</span>
            <input type="password"  className='logininp' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button className='subbtn' onClick={handleLogIn}>LogIn</button>
            {errr && <span>Enter a valid username aur password</span>}
            <span>If you are coming here for ther first Time <Link>SignUp</Link></span>
        </div>
    </div>
  )
}

export default Login
