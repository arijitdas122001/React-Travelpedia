import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../redux-store/reducers/authreducer';
const Register = () => {
  const [userName,setUserName]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [err,seterr]=useState(null);
  // const [registerBody,setRegisterBody]=useState({
  //   userName:userName,
  //   email:email,
  //   password:password,
  // });
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
    const res=await axios.post(`${import.meta.env.VITE_PORT_NO}/auth/register`,{
      userName:userName,
      email:email,
      password:password
    });
    // console.log(res.data);
    dispatch(login({userName:res.data.userName,email:res.data.email}));
    localStorage.setItem("user",JSON.stringify(res.data.userName));
    localStorage.setItem("email",JSON.stringify(res.data.email));
    navigate('/');
  }catch(error){
    seterr(error);
  }
  }
  return (
    <div className='regis'>
        <div className='regiswrapper'>
            <span>Enter Your UserName:</span>
            <input type="text" className='regisinp' placeholder='username' onChange={(e)=>setUserName(e.target.value)}/>
            <span>Enter Your Email</span>
            <input type="email" className='regisinp' placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
            <span>Enter Your Password:</span>
            <input type="password"  className='regisinp' placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
            <span>Confirm Your Password:</span>
            <input type="password"  className='regisinp' placeholder='Re-Enter password'/>
            <button className='subbtn' onClick={handleSubmit}>Register</button>
            <span>If You already Registerd <Link>LogIn</Link></span>
        </div>
    </div>
  )
}

export default Register
