import React from 'react'
import useFetch from '../../Hooks/useFetch';
import './Features.css'
import Featureskt from './Featureskt';
const Features = () => {
    const {data, loading, error}=useFetch(`${import.meta.env.VITE_PORT_NO}/hotels/getHotelcount?cities=uttarakhand,bhubaneswar,ayodha`);
    // console.log(data);
   return (
    <div>
     <div className="featured">
      {loading?<>{Array(3).fill(<Featureskt/>)}</>:
      <>
       <div className="featuredItem">
       <img 
          src="https://media.istockphoto.com/id/1450230477/photo/on-the-festival-of-deepawali-hindu-people-are-celebrating-deepotsav-in-ayodhya-uttar-pradesh.jpg?s=1024x1024&w=is&k=20&c=_Fc93k4WpbxnsrAHbQPX7snilin_SuYuKytWTtDUkmk="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ayodha</h1> 
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.inditales.com/wp-content/uploads/2020/09/puri-jagannath-temple.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Odisha</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/10/Best-Places-to-Visit-in-Kedarnath.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Uttarakhand</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      </>
}
      </div>
    </div>
  )
}

export default Features
