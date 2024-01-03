import React from 'react'
import {Header,Features, PropertyList, HotelNames} from '../../components/index.js'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Header/>
      <div className="homeContainer">
      <Features/>
      <h1>Choose According To Your Taste</h1>
      <PropertyList/>
      <h2>Choose Your Comfortable Stay</h2>
      <HotelNames/>
      </div>
    </div>
  )
}

export default Home
