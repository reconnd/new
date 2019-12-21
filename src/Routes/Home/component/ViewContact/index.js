import React, { useContext } from 'react'
import Axios from 'axios'
import { ContactContext } from '../../../../context/ContactContext'
import { CurrentContactContext } from '../../../../context/CurrentContactContext'

import {main} from './styles'

const ViewContact = props => {

  const [contact, setContact ] = useContext(ContactContext)

  const [currentContact, setCurrentContact] = useContext(CurrentContactContext)

  const deleteContact = async (contactid) =>{
    try{
      Axios.delete(`https://simple-contact-crud.herokuapp.com/contact/${contactid}`,
      {
        headers:{
          Accept:'application/json'
        }        
      })
      .then(
        setContact(contact.filter(c => c.id !== contactid))
      )      
    } catch (err) {
      console.error(err);
    }
  }

  const editContact = c => {
    setCurrentContact(
      { 
        id: c.id, 
        firstName: 
        c.firstName, 
        lastName: c.lastName, 
        age: 
        c.age, 
        photo: c.photo
      }
    )
    props.setEditing(true);
  }
  
  return(
    <table className={main}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contact.length > 0 ? (
          contact.map(c => (
           <tr key={c.id}>
              <td>{`${c.firstName} ${c.lastName}`}</td>
              <td>{c.age}</td>
              <td>
                <button
                  onClick={() => editContact(c)}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button
                  onClick={() =>deleteContact(c.id)}
                  className="button muted-button"
                >
                  Delete
                </button>   
              </td>
           </tr>
          ))
          
        ) : (
          <tr></tr>
        )}
      </tbody>
      
    </table>
  )

}


export default ViewContact
