import React, { useState } from 'react'
import {Navbar,Header,SearchItem, Button} from '../../components/index.js'
import './Hotels.css'
import { useLocation } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch.js'
import { useSelector } from 'react-redux'
const Hotels = () => {
  const location=useLocation();
  const options=useSelector((state)=>state.searchR.options);
  const dest=location.state.destination;
  const [min,setMin]=useState(null);
  const [max,setMax]=useState(null);
  const {data,loading,err,reFetch}=useFetch(`${import.meta.env.VITE_PORT_NO}/hotels/allhotels?city=${dest}&min=${min || 0}&max=${max || 10000}`);
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
          <input className="destinaton" type='text' placeholder={dest} />
          <div className="dates">Current Location To {dest}</div>
          <div className="quantinfo">
            <span>Maximum Price</span>
            <input type='number' onChange={(e)=>setMax(e.target.value)} placeholder='2000'/>
          </div>
          <div className="quantinfo">
            <span>Minimum Price</span>
            <input type='number' onChange={(e)=>setMin(e.target.value)} placeholder='500'/>
          </div>
          <div className="quantinfo">
            <span>Adults</span>
            <input type='number' placeholder={options.Adults}/>
          </div>
          <div className="quantinfo">
            <span>Children</span>
            <input type='number' placeholder={options.children}/>
          </div>
          <div className="quantinfo">
            <span>Rooms</span>
            <input type='number' placeholder={options.Rooms}/>
          </div>
      <Button children="Search"/>
        </div>
        <div className="hotelsLists">
          {loading?"data is loading":<>
          {data.map((ele,i)=>(
            <SearchItem item={ele} key={i}/>
          ))}
          </>}
        </div>
      </div>
     </div>
    </div>
  )
}

export default Hotels
