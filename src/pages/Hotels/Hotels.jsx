import React from 'react'
import {Navbar,Header,SearchItem, Button} from '../../components/index.js'
import './Hotels.css'
const Hotels = () => {
  return (
    <div>
     <Navbar/>
     <Header type="list"/>
     <div className="hotels">
      <div className="hotelcontainer">
        <div className="hotelsinfo">
          <h1>Search</h1>
          <span>Current Location</span>
          <input className="destinaton" type='text' placeholder='From'/>
          <span>Destination</span>
          <input className="destinaton" type='text' placeholder='To'/>
          <div className="dates">something To Something</div>
          <div className="quantinfo">
            <span>Adults - 0</span>
            <span>Children - 0</span>
            <span>Rooms - 0</span>
          </div>
      <Button children="Search"/>
        </div>
        <div className="hotelsLists">
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Hotels
