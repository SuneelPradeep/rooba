import React, { useState } from 'react';
import { Row, Col, Button, Card, Typography } from 'antd';
import { ShoppingCartOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import SideBar from './components/SideBar';
import MainBar from './components/MainBar';

const { Title, Paragraph } = Typography;

const NewSite = () => {
    const [selectedOption, setSelectedOption] = useState('market');

    const handleSidebarItemClick = (option) => {
        setSelectedOption(option);
    };
    console.log('selectedoption is',selectedOption);
    const getMainContent = () => {
        switch (selectedOption) {
          case 'cart':
            return <MainBar level={3} title='cart' /> ;
          case 'market':
            return <MainBar level={3} title='market' />;
          case 'settings':
            return <MainBar level={3} title='settings' />;
          case 'logout':
            return <MainBar level={3} title='logout' />;
          default:
            return <MainBar level={3} title='market' />;
        }
      };
  return (
    <Row style={{ height: '100vh' }}>
      <SideBar handleClick={handleSidebarItemClick} selectedOption={selectedOption} />
      {getMainContent()}
      
    </Row>
  );
};

export default NewSite;
