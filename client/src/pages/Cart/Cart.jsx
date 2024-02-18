import React, { useState } from "react";
import "./Cart.css";
import { Button, Header, Navbar } from "../../components/index.js";
import { useLocation } from "react-router-dom";
import useFetch from "../../Hooks/useFetch.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const location = useLocation();
  const username = JSON.parse(localStorage.getItem("user"));
  const email = JSON.parse(localStorage.getItem("email"));
  const { id, TotalPrice, roomCount, noOfNights } = location.state;
  const discoutPrice = TotalPrice * (30 / 100);
  const totalFee = discoutPrice + 200;
  const { data, loading, err } = useFetch(
    `${import.meta.env.VITE_PORT_NO}/hotels/getHotel/${id}`
    );
    const [count,setcount]=useState(0);
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [GuestDetails,setGuestDetails]=useState([{name:name,age:age}]);
    const handelchange=(value,q)=>{
      q=="name"?setName(value):setAge(value);
    }
  const handelform=()=>{
    setGuestDetails([...GuestDetails,{name:name,age:age}])
  }
  console.log(GuestDetails);
  return (  
    <div>
      <Navbar />
      <Header type="list" />
      <div className="cart">
        <div className="cartcont">
          <div className="cart-left">
            <h1>Review your Booking</h1>
            <div className="hotel-details">
              <div className="searchItem">
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                  alt=""
                  className="siImg"
                />
                <div className="siDesc">
                  <h1 className="siTitle">{data.name}</h1>
                  <span className="siDistance">
                    {data.distance}m from center
                  </span>
                  <span className="siTaxiOp">Free airport taxi</span>
                  <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                  </span>
                  <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                  </span>
                  <span className="siCancelOp">Free cancellation </span>
                  <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                  </span>
                </div>
                <div className="siDetails">
                  <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-details">
              <h3>Guest Details</h3>
              {GuestDetails.map((ele,i)=>(
                  <div className="details">
                  <input type="text" placeholder={ele.name==""?"Enter Your Name":ele.name} onChange={(e)=>handelchange(e.target.value,"name")}/>
                  <input type="text" placeholder={ele.age==""?"Enter Your age":ele.age} onChange={(e)=>handelchange(e.target.value,"age")} />
                </div>
              ))}
              <div className="adduser" onClick={handelform}>
              Add Guest
              <FontAwesomeIcon icon={faAdd}/>
              </div>
            </div>
            <Button>Pay Now</Button>
          </div>
          <div className="cart-right">
            <h2>Price Breakup</h2>
            <div className="pricebreakup">
              <div className="cart-right-ele">
                <span>
                  {roomCount} rooms x {noOfNights} nights
                </span>
                <span>{TotalPrice}</span>
              </div>
              <hr />
              <div className="cart-right-ele">
                <span>Total Discount(30%)</span>
                <span>{discoutPrice}</span>
              </div>
              <hr />
              <div className="cart-right-ele">
                <span>Hotel Taxes</span>
                <span>200/-</span>
              </div>
              <hr />
            </div>
            <div className="cart-right-ele-total">
              <span>Total amount to be paid</span>
              <span>{totalFee}/-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
