import React from 'react'
import '../App.css'

const Card = ({name,email,age,country,pic}) => {
  return (
    <div className='card'>
        <div className='first_card'>  <img src="https://picsum.photos/200/300?random" width={40} height={40} style={{borderRadius:'50%'}} alt='pic' /> 
          <h3> {name}</h3>
          </div>
          <div className='second_card'> 
          <p> <span style={{fontWeight:'bold'}}> Age :</span> {age}</p>
           <p> <span style={{fontWeight:'bold'}}> Country :</span> {country}</p>
          </div>
    </div>
  )
}

export default Card