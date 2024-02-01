import React, { useEffect, useState } from "react";
import "./Header.css";
import { Button} from "../index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faHotel,
  faPerson,
  faPlane,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeSearchValue } from "../../redux-store/reducers/searchreducer.js";
const Header = ({type}) => {
  const [openCalender, setopenCalender] = useState(false);
  const [openOptons, setopenOptions] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const [dest,setdest]=useState("");
  const [stayOptions, setStayOptions] = useState({
    Adults: 0,
    children: 0,
    Rooms: 0,
  });
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleStayOptions = (op, name,e) => {
    setStayOptions((prev) => {
      return {
        ...prev,
        [name]:
          op === "inc" ? (stayOptions[name] += 1) : (stayOptions[name] -= 1),
      };
    });
  };
  const handlemodal=()=>{
    setopenModal(!openModal)
  }
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const searchr=useSelector((state)=>state.searchR);
  const handleSearch=()=>{
    dispatch(storeSearchValue({dates,destination:dest,stayOptions}));
    localStorage.setItem('dates',JSON.stringify(dates));
    localStorage.setItem('location',JSON.stringify(dest));
    navigate('/hotels');
  }
  const handelNavigate=()=>{
    navigate('/login')
  }
  return (
    <div className="Header">
      <div className={type==="list"?"HeaderContainer list":"HeaderContainer"}>
        <div className="HeaderTop">
          <div className="HeaderLists">
            <div className="Hlists active ">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="Hlists ">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="Hlists">
              <FontAwesomeIcon icon={faHotel} />
              <span>Hotels</span>
            </div>
            <div className="Hlists">
              <FontAwesomeIcon icon={faCar} />
              <span>Car</span> Rentals
            </div>
            <div className="Hlists">
              <FontAwesomeIcon icon={faTrain} />
              <span>Train</span>
            </div>
          </div>
        </div>
        {type==="list"?<div></div>:<><div className="HeaderBelow">
          <h1 className="HHeading">
            Already Booked Your Ticket?Hurry Up...Discounts are waiting for you
          </h1>
          <p className="Hpara">
            Get Reward points for your Travel and Travel again.30% Discount On
            your First Trip and much more is waiting ...
          </p>
          <Button children="SignIn/Register" onClick={handelNavigate} />
        </div>
        <div className="headerSearch">
          <div className="searchitem">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="text"
              className="Hsinput"
              placeholder="Search Your Destination"
              onChange={(e)=>setdest(e.target.value)}
            />
          </div>
          <div
            className="htimeline"
            onClick={() => setopenCalender(!openCalender)}
          >
            <FontAwesomeIcon icon={faCalendar} />
            <span>{`${format(dates[0].startDate, "MM/dd/yyyy")}  TO   ${format(
              dates[0].endDate,
              "MM /dd/yyy"
            )}`}</span>
            {openCalender && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="datepicker"
              />
            )}
          </div>
          <div className="hquant" >
            <FontAwesomeIcon icon={faPerson} />
            <span onClick={() => setopenOptions(!openOptons)}>
              {stayOptions.Adults}-{stayOptions.children}-{stayOptions.Rooms}
            </span>
            {openOptons && (
              <div className="options">
                <div className="optionsItem">
                  <span className="optionsText">Adults</span>
                  <button onClick={() => handleStayOptions("inc", "Adults")} style={{"cursor":"pointer"}}>
                    +
                  </button>
                  -
                  <button
                    onClick={() => handleStayOptions("dec", "Adults")}
                    disabled={stayOptions.Adults <= 0}
                    style={{"cursor":"pointer"}}
                  >
                    -
                  </button>
                </div>
                <div className="optionsItem">
                  <span className="optionsText">Children</span>
                  <button onClick={() => handleStayOptions("inc", "children")} style={{"cursor":"pointer"}}>
                    +
                  </button>
                  -
                  <button
                    onClick={() => handleStayOptions("dec", "children")}
                    disabled={stayOptions.children <= 0}
                    style={{"cursor":"pointer"}}
                  >
                    -
                  </button>
                </div>
                <div className="optionsItem">
                  <span className="optionsText">Rooms</span>
                  <button onClick={() => handleStayOptions("inc", "Rooms")} style={{"cursor":"pointer"}}>
                    +
                  </button>
                  -
                  <button
                    onClick={() => handleStayOptions("dec", "Rooms")}
                    disabled={stayOptions.Rooms <= 0}
                    style={{"cursor":"pointer"}}
                  >
                    -
                  </button>
                </div>
              </div>
            )}
          </div>
          <button onClick={handleSearch} className="searchbtn">search</button>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
