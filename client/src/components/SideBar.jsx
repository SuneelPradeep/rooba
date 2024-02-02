import { Row, Col, Button, Card, Typography } from 'antd';
import { ShoppingCartOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import React from 'react'
import '../App.css'
const { Title, Paragraph } = Typography;

const SideBar = ({handleClick, selectedOption}) => {
  return (
    <Col span={5}>
        <div className='sidebar_firstdiv'>
          <img src="bluelogo.jpg" alt="Logo" style={{ width: '100%' }} />
        </div>
        <div className='sidebar_seconddiv'>
            <h2 className='sidebar_h2' onClick={()=> handleClick('cart')} > Cart</h2>
            <h2 className='sidebar_h2' onClick={()=> handleClick('market')}> Market </h2>
            <h2 className='sidebar_h2' onClick={()=> handleClick('settings')}> Settings </h2>
            <h2 className='sidebar_h2' onClick={()=> handleClick('logout')}> Logout </h2>
          {/* <ShoppingCartOutlined style={{ fontSize: '24px', marginBottom: '16px', display: 'block' }} />
          <SettingOutlined style={{ fontSize: '24px', marginBottom: '16px', display: 'block' }} />
          <LogoutOutlined style={{ fontSize: '24px', display: 'block' }} /> */}
        </div>
      </Col>
  )
}

export default SideBar