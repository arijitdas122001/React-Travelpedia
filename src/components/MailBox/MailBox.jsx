import React from 'react'
import './MailBox.css'
const MailBox = () => {
  return (
    <div className='MailBox'>
            <div className="mailTop">
                <h3>Save Money,Save Time</h3>
                <p>Write Here And Get a Link Thourgh which we can connect</p>
            <div className="mailinput">
                <input type="text" className='minp' placeholder='Email' />
                <button className='inputbtn'>Connect</button>
            </div>
        </div>
        <hr />
        <div className="MailBottom">
            <button className='listbtn'>List Your property</button>
            <ul className='mailqueries'>
                <li>Contact Us</li>
                <li>Become a Partner</li>
                <li>Buisness Queries</li>
                <li>About Us</li>
                <li>Meet Our Team</li>
            </ul>
        </div>
    </div>
  )
}

export default MailBox
