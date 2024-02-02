import { Col,Row } from 'antd'
import React from 'react'
import '../App.css'
import Card from './Card'

const UsersSaved = ({userData}) => {
  return (
    <Col span={12}>   
              <h3> Users saved </h3> 
             {userData?.aggData && (
                <div className='div_style1' >
              <p className='p_style'>  <span className='boldit'> Total Users :   </span><span className='boldit1' > {userData?.aggData?.totalUsers}</span>    </p>
              <p className='p_style'>  <span className='boldit'> Average Age :  </span><span className='boldit1'> {userData?.aggData?.averageAge} </span>    </p> 
              <p className='p_style'> <span className='boldit'> No. of Countries :  </span> <span className='boldit1'>{userData?.aggData?.countriesCount} </span>   </p> 
                </div>
              
                )} 
              <Row>
             {userData?.userData?.map((item,id)=>(
                <div className='div_style' key={id}>
               <Card  age={item.age} country={item.country} name={item.name} email={item.email}  />
               </div>
             ))}
             </Row>
             
            </Col>
  )
}

export default UsersSaved