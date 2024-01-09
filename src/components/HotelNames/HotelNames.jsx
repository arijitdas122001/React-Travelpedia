import React from 'react'
import './HotelNames.css'
import useFetch from '../../Hooks/useFetch'
const HotelNames = () => {  
  const {data,loading,err}=useFetch(`${import.meta.env.VITE_PORT_NO}/hotels/allhotels?featured=true&limit=4`)
  return (
    <div className="fp">
    {loading?"loading page please wait":
     <>
      {data.map((ele)=>(
      <div className="fpItem">
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
