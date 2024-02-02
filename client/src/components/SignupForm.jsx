import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Row, Col ,message} from 'antd';
import axios from 'axios'
import Card from './Card';
import UsersSaved from './UsersSaved';


const SignupForm = () => {
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);
  const [data,setData] = useState([])
  const [userData, setUserData] = useState({
    userData : [], aggData : []
  })
  const [messageApi, contextHolder] = message.useMessage();
  const success = (name) => {
   messageApi.open({
      type: 'success',
      content: `Signed up successfully ${name}`,
    });
  };
  const error =( name)=>{
   messageApi.open({
      type: 'error',
      content: `Signed up failed ${name}`,
    });
  };
  const validateEmail = (rule, value, callback) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      callback('Please enter a valid email address');
    } else {
      callback();
    }
  };

  const validatePassword = (rule, value, callback) => {
    if (value && value.length < 8) {
      callback('Password must be at least 8 characters long');
    } else {
      callback();
    }
  };

  const handleFormSubmit = async(values) => {
    console.log('Form submitted:', values);
    setData([...data, values])
    const datas = await axios.post('http://localhost:3010/users',values)
    console.log('after saved data',datas);
    if(datas.statusText ==='OK') { success(values.name)}
    else { error(values.name)}
  };

  const handleValuesChange = (_, allValues) => {
    const isValid = Object.values(allValues).every((value) => !!value);
    setIsFormValid(isValid);
  };


  useEffect(()=>{
        const fetchData= async()=>{
         const data = await axios.get('http://localhost:3010/users')
         const aggdata = await axios.get('http://localhost:3010/users/aggregated_users')
         console.log('data is',data);
         if(data?.statusText ==="OK" || aggdata?.statusText==="OK" ){
            let newuserdata = data?.data
            let newaggdata = aggdata?.data
            setUserData({...userData,userData: newuserdata,aggData : newaggdata[0]})
         }
         
        }
        fetchData()
  },[data])

  console.log('userdata is',userData);
  return (
    <div style={{bottom:'5rem'}}>
    {contextHolder}
    <Row gutter={16}>
        <Col span={12}>
    <Form
      form={form} 
      onFinish={handleFormSubmit}
      onValuesChange={handleValuesChange}
      layout="vertical"
    >
      
           
      <Row gutter={16}>
        
        <Col span={12}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { validator: validateEmail },
            ]}
            autoComplete="off"
          >
            <Input placeholder="Enter your email"  />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: 'Please enter your country' }]}
          >
            <Input type="text" placeholder="Enter your country" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please enter your age' }]}
          >
            <Input type="number" placeholder="Enter your age" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
      <Col span={24}>
      <Form.Item
        label="Password" 
        name="password"
        rules={[
          { required: true, message: 'Please enter your password' },
          { validator: validatePassword },
        ]}
        autoComplete="new-password"
      >
        <Input.Password placeholder="Enter your password"    />
      </Form.Item>
      </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
        <Form.Item > 
        <Button type="primary" htmlType="submit" disabled={!isFormValid}>
          Sign Up
        </Button>
      </Form.Item>
        </Col>
      </Row>
      </Form>
      </Col>
    

        <UsersSaved userData={userData} />
      
        </Row>
   
    </div>
  );
};

export default SignupForm;
