import React from 'react'
import './HotelNames.css'
import useFetch from '../../Hooks/useFetch'
import HotelNskt from './HotelNskt'
const HotelNames = () => {  
  const {data,loading,err}=useFetch(`${import.meta.env.VITE_PORT_NO}/hotels/allhotels?featured=true&limit=4`)
  return (
    <div className="fp">
    {loading?<>{Array(4).fill(<HotelNskt/>)}</>:
     <>
      {data.map((ele,i)=>(
      <div className="fpItem" key={i}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">{ele.name}</span>
        <span className="fpCity">{ele.city}</span>
        <span className="fpPrice">Starting from {ele.cheapestPrice}</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      ))}
    </>
      }
    </div>
  )
}

export default HotelNames
