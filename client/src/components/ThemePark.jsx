import { Row,Col } from 'antd'
import React, { useState } from 'react'
import { CiBookmarkPlus } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiDroplet } from "react-icons/ci";
import { IoIosRestaurant } from "react-icons/io";
import { MdWorkspacePremium } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import '../App.css'
import Overview from './Overview';
import LandMarks from './LandMarks';
import Maps from './Maps';
import AllOverview from './AllOverview';
import CompleteProfile from './CompleteProfile';
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";


const ThemePark = () => {
    const [sliderValue, setSliderValue] = useState(0)
    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
      };

  return (
   
    <Row style={{border:'3px solid gray',padding:'1rem'}}>
        <Col span={16} >
            <div className='theme_div' >
           <p style={{fontWeight:'bold',fontSize:"1.8rem"}}> Theme Park Site</p>
          <span className='theme_span_address'> <CiBookmarkPlus color='black' size={20} /> <p>Address of the site</p> </span>
            <div className='theme_div2'>
                <p className='theme_p'><span></span><AiOutlineThunderbolt /> Adult Rides </p>
                <p className='theme_p'><span></span><CiDroplet /> Family Rides </p>
                <p className='theme_p'><span></span><IoIosRestaurant /> Restaurants </p>
                <p className='theme_p'><span></span><MdWorkspacePremium /> Premium </p>
            </div>
            <button className='theme_button'><FaLocationArrow />  View oppurtunity on polygon </button>
            <div className='theme_div3'>
                <span className='theme_span'>
                    <h3> 200 Acres</h3> <p className='theme_p2'> Area</p></span>
                <span className='theme_span'> <h3>  5 Lakhs </h3> <p className='theme_p2'> Starting price</p></span>
                <span className='theme_span'> <h3> 10 Days </h3> <p className='theme_p2'> Remaining Days</p></span>
                <span className='theme_span'> <h3> 2.5 years</h3> <p className='theme_p2'> Next Check</p></span>
            </div>
           </div>
      
       
        </Col>
        <Col span={8} className='theme_divv'>
            <button className='theme_button2'> Complete</button>
            <button className='theme_buttoncomplete'> Site visit <IoIosArrowForward /></button>
            <div className="flex items-center">
        <div className="slider_div">
        <p className='slider_text'> {`Rs ${sliderValue},00,000`}</p>
        <p className='slider_text2'> Rs 90,00,000</p>
          <input
            type="range"
            min="0"
             max="90"
            value={sliderValue}
            onChange={handleSliderChange}
            className="slider-input"
          />
          
        </div>
      </div>
     
        </Col>      
    </Row>
   
  )
}

export default ThemePark