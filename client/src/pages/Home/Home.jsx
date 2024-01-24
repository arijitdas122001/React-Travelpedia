import React from 'react'
import {Header,Features, PropertyList, HotelNames, MailBox, Footer, Navbar} from '../../components/index.js'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
      <Features/>
      <h1>Choose According To Your Taste</h1>
      <PropertyList/>
      <h2>Choose Your Comfortable Stay</h2>
      <HotelNames/>
      <h2>Write Directly To Us FeedBack/Suggestions/Query</h2>
      <MailBox/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
