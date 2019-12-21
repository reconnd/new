import React, { useContext } from 'react'
import { CurrentContactContext } from '../../../../context/CurrentContactContext'
import { ContactContext } from '../../../../context/ContactContext'
import Axios from 'axios'

import {inputForm} from './styles'

const Edit = props => {

  const [currentContact, setCurrentContact] = useContext(CurrentContactContext)
  const [contact, setContact] = useContext(ContactContext)

  const handleInputChange = event => {
    const { name, value } = event.target
    setCurrentContact({ ...currentContact, [name]: value })
  }

  const updateContact = async (id)=>{
    try{
      Axios.put(`https://simple-contact-crud.herokuapp.com/contact/${id}`,
      {
        "firstName" : currentContact.firstName,
        "lastName": currentContact.lastName,
        "age" : currentContact.age,
        "photo": currentContact.photo
      })
      .then(
        setContact(contact.map(c=>c.id === id ? currentContact : c ))
      )
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        updateContact(currentContact.id);
      }}
    >
      <label>First Name</label>
      <input type="text" name="firstName" value={currentContact.firstName} onChange={handleInputChange} className={inputForm}/>
      <label>Last Name</label>
      <input type="text" name="lastName" value={currentContact.lastName}  onChange={handleInputChange} className={inputForm}/>
      <label>Age</label>
      <input type="text" name="age" value={currentContact.age}  onChange={handleInputChange} className={inputForm}/>
      <label>Photo url</label>
      <input type="text" name="photo" value={currentContact.photo}  onChange={handleInputChange} className={inputForm}/>
      
      <button>Update Contact</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default Edit;
