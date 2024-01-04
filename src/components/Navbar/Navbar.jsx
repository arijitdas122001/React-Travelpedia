import React from 'react'
import './navbar.css'
import {Button} from '../index.js'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navcontainer">
            <div className="navleft">
                <span className='navlogo'>WonderPedia</span>
            </div>
            <div className="navright">
                <Button children="Log In"/>
                <Button children="Register"/>
            </div>
        </div>
        </div>
  )
}

export default Navbar
