import React, { useState } from 'react'
import { Row, Col, Button, Card, Typography } from 'antd';
import { GoBellFill } from "react-icons/go";
import { TiTickOutline } from "react-icons/ti";
import { ShoppingCartOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import ThemePark from './ThemePark';
import {NavLink} from 'react-router-dom'
import AllOverview from './AllOverview';
import CompleteProfile from './CompleteProfile';
const { Title, Paragraph } = Typography;

const MainBar = ({title}) => {
    const [numberselect,setNumberselect] = useState(1)
    const [checkedstep, setCheckedstep] = useState({ checked : false, step : 0})
    const handleCheckedstep = (a,v)=>{
         setCheckedstep({ checked: a, step : v})
    }
     return (
        title !=='market' ?
        (<Col span={19} className='div_style2'> <h1 > {title}</h1></Col>) 
       
        :
        
        (
            <Col span={19} style={{ padding: '16px' }}>              
                <Row className='mainbar_row' >
                  <NavLink to='/form'><button className='button_style'>Complete Profile  </button></NavLink>
                  <GoBellFill size={40} />
                </Row>
        
                <Row className='title_style'>
                    <Title level={2}>Choose Your New Site</Title>                   
                    <div style={{display:'flex',flexDirection:'row',gap:'4rem'}}>
                    
                    <p className={`${numberselect===1 ? 'number ': 'not_number'}`} onClick={()=>setNumberselect(1)}>
                        {numberselect===1 && <TiTickOutline size={8} color='lightgreen' style={{border:'1px solid black',borderRadius:'50%',background:'black'}} />} 1</p>
                     <p className={`${numberselect===2 ? 'number ': 'not_number'}`}onClick={()=>setNumberselect(2)} >{numberselect===2 && <TiTickOutline size={8} color='lightgreen' style={{border:'1px solid black',borderRadius:'50%',background:'black'}} />} 2</p>
                      <p className={`${numberselect===3 ? 'number ': 'not_number'}`}  onClick={()=>setNumberselect(3)}>{numberselect===3 && <TiTickOutline size={8} color='lightgreen' style={{border:'1px solid black',borderRadius:'50%',background:'black'}} />} 3</p>
                  </div>                       
                </Row>

               <Row>
                  
                  <div style={{display:'flex',alignItems:'start', flexDirection:'column', width: '100%', marginRight: '0.2rem',justifyContent:'start' }}>
                    <p style={{color:'rgb(156, 142, 142)'}}>{`jMarket > Category 1 > Theme park site > `}</p>
                    <img src="green.jpg" alt="Scenery" style={{ width: '100%', height: '30rem' }} />
                  </div>

                </Row>
                <ThemePark />
                <Row>
          <Col span={16}>
          <AllOverview />
          </Col>
          <Col span={8}>
          <CompleteProfile title="Complete Profile" button="Complete" data={checkedstep.checked && checkedstep.step===1 && { date:'12/12/2023', status:"Completed" ,compliment:"Good job"}} checkedstep={checkedstep} handleCheckedstep={handleCheckedstep}/>
          {checkedstep.step>0 && checkedstep.checked && <CompleteProfile title="Step 1" 
          button="Pay" data={checkedstep.checked && checkedstep.step===2 && { date:'13/12/2023', status:"1,00,000" ,compliment:"5% of total amount"}} checkedstep={checkedstep} handleCheckedstep={handleCheckedstep}/> }
          {checkedstep.step>1 && checkedstep.checked && <CompleteProfile title="Step 2"  data={checkedstep.checked && checkedstep.step===4 && { date:'14/12/2023', status:"Completed" ,compliment:""}}
          button="Complete" checkedstep={checkedstep} handleCheckedstep={handleCheckedstep}/> }
          {checkedstep.step>2 && checkedstep.checked && <CompleteProfile title="Step 3"  data={checkedstep.checked && checkedstep.step===4 && { date:'15/12/2023', status:"Completed" ,compliment:"We will get back to you in 3 months"}}
          button="Complete" checkedstep={checkedstep} handleCheckedstep={handleCheckedstep}/> }
          {checkedstep.step>3 && checkedstep.checked && <CompleteProfile title="Step 4" 
          button="Complete" checkedstep={checkedstep} handleCheckedstep={handleCheckedstep}/> }
          {checkedstep.step>4 && checkedstep.checked && <CompleteProfile title="Step 5" 
          button="Complete" checkedstep={checkedstep} handleCheckedstep={handleCheckedstep}/> }
          
          </Col>
    </Row>
                
              </Col>
          )
     )
        
        


}

export default MainBar;