import { Checkbox, Col, Row } from 'antd'
import React, { useState } from 'react'

const CompleteProfile = ({title,data ={date :'',compliment:'',status:''},button,handleCheckedstep,checkedstep}) => {
   const {date,compliment,status} = data;
   console.log('data in completeprofile is',data,checkedstep);
    const [checked,setChecked] = useState(false)
    const [buttontext,setButtontext] = useState(button)
    console.log('checked is',checked,buttontext);
    const handlebuttontext = ()=>{
        if(checked && checkedstep.step===0 ){
            setButtontext('Download')
            handleCheckedstep(checked, 1)
        }
        else if(checked && checkedstep.step===1){
            setButtontext('Receipt')
            handleCheckedstep(checked, 2)
        }
        else if(checked && checkedstep.step===2){
            setButtontext('Download')
            handleCheckedstep(checked, 3)
        } else if(checked && checkedstep.step===3){
            setButtontext('Download')
            handleCheckedstep(checked, 4)
        }
        else if(checked && checkedstep.step===4){
            setButtontext('Download')
            handleCheckedstep(checked, 5)
        }

        else{
            setButtontext(button)
            handleCheckedstep(checked, checkedstep.step)
        }
        }
    
  return (
    <Row className='complete_div'>
      
        <Row justify={'space-between'}>
     <Checkbox value={checked} onChange={(e)=> setChecked(e.target.checked)} >
     <h3>{title} </h3>
     </Checkbox>
     <h4> {date}</h4>
     </Row>
     <Row justify={'start'} style={{marginTop:'-2rem',color:'lightblue'}}><p> {compliment}</p></Row>
     <Row></Row>
     <Row justify={'end'} align={'space-between'} style={{fontSize:'1.2rem',fontWeight:'bold'}}>
     <p> {status}</p>
     {/* className={`${checked && buttontext ? 'theme_buttoncomplete' : 'button_stylecomplete'}`} */}
        <button className="button_stylecomplete" onClick={handlebuttontext}> {buttontext} </button> </Row>
    </Row>
  )
}

export default CompleteProfile