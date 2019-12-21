import React, { createContext, useState } from 'react'

export const CurrentContactContext = createContext();

const CurrentContactContextProvider = ({ children }) => {
  
  const initialFormState = { id: null, firstName: '', lastName: '', age: null, photo: ''}

  const [ currentContact, setCurrentContact ] = useState(initialFormState)
  
  return(
    <CurrentContactContext.Provider value={[currentContact, setCurrentContact]}>
      {children}
    </CurrentContactContext.Provider>
  )
}


export default CurrentContactContextProvider;