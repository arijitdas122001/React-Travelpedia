import React, { useState } from "react";
import "./Cart.css";
import { Button, Header, Navbar } from "../../components/index.js";
import { useLocation } from "react-router-dom";
import useFetch from "../../Hooks/useFetch.js";
import img from "../../..//public/travel.png"
import axios from "axios";
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
    const [GuestDetails,setGuestDetails]=useState([{name,age}]);
    const handelchange=(value,q)=>{
      q=="name"?setName(value):setAge(value);
    }
  const handelform=(op)=>{
    if(op==="add"){
      setGuestDetails([...GuestDetails,{name,age}])
    }else{
      GuestDetails.pop();
      setGuestDetails([...GuestDetails]);
    }
  }
  // console.log(GuestDetails);
  const handelPayment=async()=>{
    const response=await axios.post(`${import.meta.env.VITE_PORT_NO}/payment/order`,{
      "amount": totalFee,
      "currency": "INR",
    });
    // console.log(response.data);
    var options = {
      "key":import.meta.env.RAZORPAY_KEY_ID , // Enter the Key ID generated from the Dashboard
      "amount": totalFee*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "TravelPedia",
      "description": "Test Transaction",
      "image":img,
      "order_id":response.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
        alert("Payment Sucessfull");
    },
      "prefill": {
          "name": username,
          "email": email,
          "contact": "9000090000"
      },
      "notes": {
          "address": "TravelPedia Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  var rzp1 = new Razorpay(options);
  rzp1.on('payment.failed', function (response){
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
  });
  rzp1.open();
  }
  return (  
    <div>
      <Navbar />
      <Header type="list" />
      {!username?<h1>Please Log in First</h1>:<div className="cart">
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
                  <input type="text"  placeholder={ele.name==""?username:ele.name} onChange={(e)=>handelchange(e.target.value,"name")}/>
                  <input type="email"  placeholder={ele.age==""?email:ele.age} onChange={(e)=>handelchange(e.target.value,"age")} />
                </div>
              ))}
              <div className="botbutton">
              <div className="adduser" onClick={()=>handelform("add")}>
              Add Guest
              </div>
              <div className="adduser" onClick={()=>handelform("remove")}>
              Remove Guest
              </div>
              </div>
            </div>
            {GuestDetails.length===0?<h4>Please Add one or more Traveller</h4>:<button className="btncart" onClick={handelPayment}>Pay Now</button>}
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
     }
    </div>
  );
};
export default Cart;
