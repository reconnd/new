import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios';

export const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
  
  const[contact, setContact] = useState([])
    
  const fetchData = async () =>{
    try{
      const response = await Axios.get(`https://simple-contact-crud.herokuapp.com/contact`)

      const result = response.data.data;
      setContact(result);

    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {   
    fetchData();
  },[]);

  return(
    <ContactContext.Provider value={[contact, setContact]}>
      {children}
    </ContactContext.Provider>
  )
}


export default ContactContextProvider;