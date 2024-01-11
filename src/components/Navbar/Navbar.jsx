import React from 'react'
import './navbar.css'
import {Button} from '../index.js'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux-store/reducers/authreducer.js'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const userpresent=useSelector((state)=>state.auth.status);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleLogout=()=>{
        dispatch(logOut());
    }
    const handleClick=(event)=>{
        navigate(`/${event}`)
    }
  return (
    <div className='navbar'>
        <div className="navcontainer">
            <div className="navleft">
                <span className='navlogo'>WonderPedia</span>
            </div>
            <div className="navright">
                {userpresent?
                <>
                <div className="userlogo">
                    <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1704994422~exp=1704995022~hmac=02d88647465a642441eeed2b497b9d307d4415502f55b67cb2dc211afab111fa" alt="" />
                </div>
                <button className='btnnav' onClick={()=>handleLogout("logout")}>Log Out</button>
                </>:<>
                <button className='btnnav' onClick={()=>handleClick("login")}>Log In</button>
                <button className='btnnav' onClick={()=>handleClick("register")}>Register</button></>}
            </div>
        </div>
        </div>
  )
}

export default Navbar
