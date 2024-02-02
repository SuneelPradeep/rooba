import { Col } from 'antd'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Maps = () => {
  return (
    <Col span={16} className='overview_title'>
        <h2> Map</h2>
        <div style={{width:'100%'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15200.89534071657!2d83.30964267253874!3d17.734089396084386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943489108d207%3A0xc5c280024dd34818!2sCMR%20Central%20Maddilapalem!5e0!3m2!1sen!2sin!4v1706877556177!5m2!1sen!2sin"
         width="100%" height="100%" style={{border:0, allowfullscreen :"", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </div>
      <div className="landmark_span">
      <button className="theme_buttoncomplete
" >Schedule a call <IoIosArrowForward /></button>
        </div>

    </Col>
  )
}

export default Maps