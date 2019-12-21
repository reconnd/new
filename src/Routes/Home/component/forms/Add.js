import React, { useContext, useState } from 'react'
import { ContactContext } from '../../../../context/ContactContext'
import Axios from 'axios'

import {inputForm} from './styles'

const Add = () => {
  
  const [contact, setContact] = useContext(ContactContext)
  
	const initialFormState = { firstName: '', lastName: '', age: '', photo: '' }
	const [ input, setInput ] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  const add = async () => {
    try{
      Axios.post(`https://simple-contact-crud.herokuapp.com/contact`,input)
      .then(
        setContact([...contact, input])
      )
    } catch (err) {
      console.error(err);
    }

  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        add();
      }}
    >
      <label>First Name</label>
      <input type="text" name="firstName" value={input.firstName} onChange={handleInputChange} className={inputForm}/>
      <label>Last Name</label>
      <input type="text" name="lastName" value={input.lastName}  onChange={handleInputChange} className={inputForm}/>
      <label>Age</label>
      <input type="text" name="age" value={input.age}  onChange={handleInputChange} className={inputForm}/>
      <label>Photo url</label>
      <input type="text" name="photo" value={input.photo}  onChange={handleInputChange} className={inputForm}/>
      
      <button>Add New Contact</button>
    </form>
  )
}

export default Add;
