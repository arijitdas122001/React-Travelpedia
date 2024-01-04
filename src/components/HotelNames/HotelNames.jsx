import React from 'react'
import './HotelNames.css'
const HotelNames = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Bluberry Inn</span>
        <span className="fpCity">Ayodha</span>
        <span className="fpPrice">Starting from 1200</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites</span>
        <span className="fpCity">Ayodha</span>
        <span className="fpPrice">Starting from 2500</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?w=826&t=st=1704220328~exp=1704220928~hmac=8857491d753096f56fc55108e6e04ba4a79be7943bcdfe3ea28318925a36d473"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Delhi</span>
        <span className="fpPrice">Starting from 3500</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=826&t=st=1704220288~exp=1704220888~hmac=9508d47a375d01e8394b3e04f18d9cee5f104eb0a953b7b87bdbaa41494ee642"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Derjeling</span>
        <span className="fpPrice">Starting from 3000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default HotelNames
