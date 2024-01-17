import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../../Hooks/useFetch'
import './Reserve.css'
const Reserve = ({openModal,id}) => {
  const {data,loading,err}=useFetch(`${import.meta.env.VITE_PORT_NO}/hotels/getHotelrooms/${id}`);
  console.log(data);
  return (
    <div className='reserve'>
      <div className='rContainer'>
        <FontAwesomeIcon icon={faXmarkCircle}   onClick={()=>openModal(false)}/>
        <h2>Select Rooms Available Rooms</h2>
        {data.map((ele)=>(
          <div className='roomcont'>
            <div className="topbox">
          <div className='rtitle'>{ele.title}</div>
          <div className='rdesc'>{ele.desc}</div>
          </div>
          <div className='rbox'>
            <div className='boxleft'>
            <div className='rprice'>
              <label>Current Price</label>
              :
              {ele.price}
            </div>
            <div className='rPeople'>
              <label>Max People</label>
              :
              {ele.maxpeople}
            </div>
            </div>
            <div className='boxright'>
              {ele.roomNumbers.map((item,i)=>(
              <div className='rooms' key={i}>
                 <label>{item.number}</label>
                <input type='checkbox'
                value={item._id}
                />
              </div>
              ))}
            </div>
            <div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
} 

export default Reserve
  