import React, { useEffect, useState } from 'react'
import {Navbar,Header,SearchItem, Button} from '../../components/index.js'
import './Hotels.css'
import useFetch from '../../Hooks/useFetch.js'
import { useSelector } from 'react-redux'
const Hotels = () => {
  // const location=useLocation();
  const options=useSelector((state)=>state.searchR.options);
  const [openfilter,setfilter]=useState(false);
  const [category,setCat]=useState("");
  const [pRange,setpRange]=useState("");
  // const dest=location.state.destination;
  const dest=JSON.parse(localStorage.getItem('location'));
  const [destination,setdestination]=useState(dest);
  const [min,setMin]=useState(null);
  const [max,setMax]=useState(null);
  const catstr=category==="" || category===undefined?"":`type=${category}`;
  const prangestr=pRange==="" || pRange===undefined?"":`sval=${pRange==="Low-To-High"?"asc":"desc"}`;
  const {data,loading,err,reFetch}=useFetch(`${import.meta.env.VITE_PORT_NO}/hotels/allhotels?city=${destination}&min=${min || 0}&max=${max || 10000}&`+`${catstr}&`+`${prangestr}`);
  const handelFilter=()=>{
    setfilter(!openfilter);
  }
  return (
    <div>
     <Navbar/>
     <Header type="list"/>
     <div className="hotels">
     <div className='filtercont'>
     <div onClick={handelFilter} className="hfilter">
            Filters
          </div>
      {openfilter && 
          <div className="filters">
          <div className="filtercont">
            <select className="filtertypes" onChange={(e)=>setCat(e.target.value)}>
              <option value="" disabled>{category===""?"Category":category}</option>
              <option value="Apartments">Apartments</option>
              <option value="hotel">Hotels</option>
              <option value="resorts">Resorts</option>
            </select>
            <select className="filtertypes"  onChange={(e)=>setpRange(e.target.value)}>
            <option value="" disabled>{pRange===""?"Price":pRange}</option>
              <option value="Low-To-High">Low-To-High</option>
              <option value="High-To-Low">High-To-Low</option>
            </select>
          </div>
        </div>}</div>
      <div className="hotelcontainer">
        <div className="hotelsinfo">
          <h1>Search</h1> 
          <span>Current Location</span>
          <input className="destinaton" type='text' placeholder='From'/>
          <span>Destination</span>              
          <input className="destinaton" type='text' placeholder={dest} onChange={(e)=>setdestination(e.target.value)} />
          <div className="dates">Current Location To {destination}</div>
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
