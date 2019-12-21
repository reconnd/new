import React, { useContext } from 'react'
import { CurrentContactContext } from '../../../../context/CurrentContactContext'

import {
  main,
  details,
  right,
  left
} from './styles'

const ViewDetail = () => {
  const [currentContact, setCurrentContact] = useContext(CurrentContactContext)

  return (
    <div >
      {currentContact.id !== null ? (
        <div className={main}>
          <div className={right}>
            <img src={currentContact.photo} alt={currentContact.firstName} />
          </div>        
          <div className={left}>
            <strong>Name: {`${currentContact.firstName} ${currentContact.lastName}`}</strong>
            <strong>Age: {currentContact.age}</strong>
          </div>
        </div>
      ) : (<div></div>)}
    </div>
  )
}

export default ViewDetail;
