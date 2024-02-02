import React from 'react'
import '../App.css'
import { Col, Row } from 'antd'

import { MdLocalAirport } from "react-icons/md";
import { MdConnectingAirports } from "react-icons/md";
import { FaRoad } from "react-icons/fa";

const LandMarks = () => {
  return (
    <Col span={16} className='overview_title'>
    
        <h2 >Landmarks</h2>
        <div className='landmark_grid'>
            <div className='landmark_grid2'>
            <p style={{color:'blue'}}><MdLocalAirport /> Airport</p>
            <span className='landmark_span'> 100 km <p className='landmark_p'>Airport 1</p></span>
            </div>
          
            <div className='landmark_grid2'> 
                <p style={{color:'blue'}} ><MdConnectingAirports /> Airport</p>
            <span className='landmark_span' > 25 km <p className='landmark_p'>Green Which Terminal</p></span>
            </div>
            <div className='landmark_grid2'>
            <p style={{color:'blue'}}><FaRoad /> Highway</p>
            <span className='landmark_span'> 100 km<p className='landmark_p'>Highway number 5</p></span>
            </div>
            <div>
            
              
              
            </div>
            </div>
        
    
    </Col>
  )
}

export default LandMarks