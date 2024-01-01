import React from 'react'
import './Header.css'
import {Button} from '../index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faHotel, faPlane, faTrain } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <div className='Header'>
      <div className="HeaderContainer">
        <div className="HeaderTop">
            <div className='HeaderLists'>
                <div className='Hlists active'><FontAwesomeIcon icon={faBed} /><span>Stays</span></div>
                <div className='Hlists '><FontAwesomeIcon icon={faPlane}/><span>Flights</span></div>
                <div className='Hlists'><FontAwesomeIcon icon={faHotel} /><span>Hotels</span></div>
                <div className='Hlists'><FontAwesomeIcon icon={faCar} /><span>Car</span> Rentals</div>
                <div className='Hlists'><FontAwesomeIcon icon={faTrain}/><span>Train</span></div>
                </div>
        </div>
        <div className="HeaderBelow">
            <h1 className='HHeading'>Already Booked Your Ticket?Hurry Up...Discounts are waiting for you</h1>
            <p className="Hpara">Get Reward points for your Travel and Travel again.30% Discount On your First Trip and much more is waiting ...</p>
            <Button children="SignIn/Register"/>
        </div>
      </div>
    </div>
  )
}

export default Header
