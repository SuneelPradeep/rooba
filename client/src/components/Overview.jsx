import { Col } from 'antd'
import React from 'react'
import '../App.css'

const Overview = ({title, description}) => {
  return (
    <Col span={16} className='overview_title'>
        <h2 style={{textAlign:'start'}}>{title}</h2>
        <p style={{textAlign:'start'}}> {description}         
        </p>
        
    </Col>
  )
}

export default Overview