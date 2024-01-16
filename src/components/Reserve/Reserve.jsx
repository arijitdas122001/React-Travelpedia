import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Reserve = ({openModal}) => {
  return (
    <div className='reserve'>
      <div className='rContainer'>
        <FontAwesomeIcon icon={faXmarkCircle} onClick={()=>openModal(false)}/>
      </div>
    </div>
  )
} 

export default Reserve
