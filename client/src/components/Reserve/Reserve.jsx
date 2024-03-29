import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "../index";
import { ColorRing } from 'react-loader-spinner'
import useFetch from "../../Hooks/useFetch";
import "./Reserve.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Reserve = ({ openModal, id }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [roomCount,SetroomCount]=useState(0);
  const [error, seterror] = useState(false);
  const [TotalPrice,setTotalPrice]=useState(0);
  const navigate = useNavigate();
  const { data, loading, err } = useFetch(
    `${import.meta.env.VITE_PORT_NO}/hotels/getHotelrooms/${id}`
  );
  // console.log(data);
  const handelChange = (e,price) => {
    const isChecked = e.target.checked;
    const value = e.target.value;
    // if the value is checked the we have to push in the array if the box is not selected then pop from the array
    setTotalPrice(isChecked && TotalPrice+price);
    SetroomCount(isChecked && roomCount+1);
    setSelectedRooms(
      isChecked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  console.log(TotalPrice);
  const dates = useSelector((state) => state.searchR.dates);
  const user = JSON.parse(localStorage.getItem("user"));
  const DateRange = (startdate, enddate) => {
    const start = new Date(startdate);
    const end = new Date(enddate);
    const date = new Date(start.getTime());
    const datesList = [];
    while (date <= end) {
      datesList.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return datesList;
  };
  const alldates = DateRange(dates[0].startDate, dates[0].endDate);
  const noOfNights=alldates.length
  const handelReserve = async (navdir) => {
    // console.log("clicking");
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `${import.meta.env.VITE_PORT_NO}/rooms/updatedates/${roomId}`,
            {
              dates: alldates,
            }
          );
          return res.data;
        })
      );
      navdir==="re"?navigate('/cart',{state:{id,TotalPrice,roomCount,noOfNights}}):navigate('/login')
    } catch (error) {
      seterror(true);
    }
  };
  const isAvailable = (unavailableDates) => {
    const isFound = unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    //  return true if room number is found in the array
    return !isFound;
    //  it will return that if room number is found in the array then return false or return true
    // so in the disable it will flip
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faXmarkCircle}
          onClick={() => openModal(false)}
          className="ricon"
        />
        <h2>Select Available Rooms</h2>
        {loading ?<div className="loadingcont">
          <ColorRing
          visible={true}
          height="80"
          width="60"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={[]}
          />
        </div>:
          <>
            {data.map((ele, i) => (
              <div className="roomcont" key={i}>
                <div className="topbox">
                  <div className="rtitle">{ele.title}</div>
                  <div className="rdesc">{ele.desc}</div>
                </div>
                <div className="rbox">
                  <div className="boxleft">
                    <div className="rprice">
                      <label>Current Price</label>:{ele.price}
                    </div>
                    <div className="rPeople">
                      <label>Max People</label>:{ele.maxpeople}
                    </div>
                  </div>
                  <div className="boxright">
                    {ele.roomNumbers.map((item, i) => (
                      <div className="rooms" key={i}>
                        <label>{item.number}</label>
                        <input
                          type="checkbox" 
                          value={item._id}
                          disabled={!isAvailable(item.unavailableDates)}
                          onChange={(e)=>handelChange(e,ele.price)}
                        />
                      </div>
                    ))}
                  </div>
                  <div></div>
                </div>
              </div>
            ))}
          </>
        }
        {user ? (
          <Button children="Reserve Now" onClick={()=>handelReserve('re')}/>
        ) : (
          <Button children="You must log in first" onClick={()=>handelReserve('notre')} />
        )}
      </div>
    </div>
  );
};

export default Reserve;
