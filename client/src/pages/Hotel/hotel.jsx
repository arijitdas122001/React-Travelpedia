import React, { useState } from 'react'
import './Hotel.css'
import { Navbar,Header, MailBox, Footer,Reserve } from '../../components/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faLocation ,faCircleArrowLeft,faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch.js'
import { useSelector } from 'react-redux'
const Hotel = () => {
  const [index,setindex]=useState(0);
  const [openModal,setopenModal]=useState(false);
  const [openBooking,setopenBooking]=useState(false);
  // const dates=useSelector((state)=>state.searchR.dates);
  const dates=JSON.parse(localStorage.getItem('dates'));
  console.log(dates);
  const obj=useParams();
  const handleModal=(i)=>{
    setopenModal(!openModal)
    setindex(i);
  }
  const handelIncDec=(ins)=>{
    ins=="inc"?setindex(index===5?0:index+1):setindex(index===0?5:index-1);
  }
  const {data,loading,err}=useFetch(`${import.meta.env.VITE_PORT_NO}/hotels/getHotel/${obj.id}`)
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const periodTime=dayDifference(dates[0].startDate,dates[0].endDate);
  // console.log(periodTime);
  const handelopen=()=>{
    setopenBooking(!openBooking);
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="property">
      {openModal && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setopenModal(!openModal )}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handelIncDec("dec")}
            />
            <div className="sliderWrapper">
              <img src={photos[index].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handelIncDec("inc")}
            />
          </div>
        )}
        {loading?"data is Loading" :<>
        <div className="propertyContainer">
         <h1>{data.name}</h1>
         <div className="propertyAdress">
         <FontAwesomeIcon icon={faLocation}/>
         <span>xxx city,yyy road,zzz colony,{data.city},Uttar Pradesh</span>
         </div>
         <div className="propertyDistance">
          <span>1 hour from Airport,20 min From Railway Station</span>
         </div>
         <div className="propertyImages">
          {photos.map((ele,i)=>(
            <div className='imgWrapper' key={ele.src} onClick={()=>handleModal(i)}>
            <img src={ele.src} alt='...' className='hotelimg'/>
            </div>
          ))}
         </div>
         <button className='reservebtn'>Reserve a Book Now!</button>
         <div className="propertyDetails">
            <div className="propertyDetailsTexts">
              <h2 className="propertyTitle">Stay in the heart of City</h2>
              <p className="hotelDesc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam saepe accusamus, dolorum dolore praesentium cumque, ea, quibusdam laboriosam ad assumenda earum asperiores. Dolorum in, necessitatibus minus amet at consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eos perspiciatis dicta amet. Obcaecati magni cum eligendi ea non assumenda ut sit dolorem maxime nihil, odio cupiditate culpa distinctio qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur sunt provident nihil vero doloribus necessitatibus! Placeat vero soluta, quasi odit magni incidunt error dignissimos repudiandae hic culpa quibusdam praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, omnis sequi? Necessitatibus, nulla! Sed ex, aspernatur eveniet ducimus accusantium sequi est laborum architecto fuga eos quasi, sapiente dolor cum nihil.
              </p>
            </div>
            <div className="propertyDetailsPrice">
              <h2>Perfect for a {periodTime }-night stay!</h2>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores doloremque maxime ducimus, facilis atque nulla!
              </span>
              <h2>
                <b>{data.cheapestPrice*periodTime}/-</b> ({periodTime} nights)
              </h2>
              <button className='btndetails' onClick={handelopen}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        </>}
        </div>
        <MailBox/>
        <Footer/>
        {openBooking && (
        <Reserve openModal={setopenBooking} id={obj.id}/>
      )}
      </div>
  )
}

export default Hotel
