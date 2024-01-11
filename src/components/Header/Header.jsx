import React, { useState } from "react";
import "./Header.css";
import { Button } from "../index.js";
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
const Header = ({type}) => {
  const [destination ,setdestination]=useState("");
  const [openCalender, setopenCalender] = useState(false);
  const [openOptons, setopenOptions] = useState(false);
  const [stayOptions, setStayOptions] = useState({
    Adults: 0,
    children: 0,
    Rooms: 0,
  });
  const [date, setDate] = useState([
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
  const navigate=useNavigate();
  const handleSearch=()=>{
    navigate('/hotels',{state:{destination}})
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
          <Button children="SignIn/Register" />
        </div>
        <div className="headerSearch">
          <div className="searchitem">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="text"
              className="Hsinput"
              placeholder="Search Your Destination"
              onChange={(e)=>setdestination(e.target.value)}
            />
          </div>
          <div
            className="htimeline"
            onClick={() => setopenCalender(!openCalender)}
          >
            <FontAwesomeIcon icon={faCalendar} />
            <span>{`${format(date[0].startDate, "mm/dd/yyyy")}  TO   ${format(
              date[0].endDate,
              "mm/dd/yyy"
            )}`}</span>
            {openCalender && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
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
