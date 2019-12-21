import React, { useState, Fragment } from 'react'
import ViewContact from './component/ViewContact'
import ViewDetail from './component/ViewDetail'
import ContactContextProvider from '../../context/ContactContext'
import CurrentContactContextProvider from '../../context/CurrentContactContext'
import Edit from './component/forms/Edit'
import Add from './component/forms/Add'

import {
  mainContainer,
  content,
  input
} from './styles'

const Home = () => {

  const [ editing, setEditing ] = useState(false)

  return (
    <ContactContextProvider>
      <CurrentContactContextProvider>
      <div>
        <h3>CONTACTS</h3>      
        <div className={mainContainer}>
          <div className={content}>
            {editing ? (
              <Fragment>
                <h2>Edit User</h2>
                <Edit              
                  editing={editing}
                  setEditing={setEditing}
                />
              </Fragment>
            ): (
              <Fragment>
                <h2>Add User</h2>
                <Add />
              </Fragment>
            )}
          </div>
          <div className={content}>
            <h2>Contact List</h2>
            <ViewContact
              editing={editing}
              setEditing={setEditing}
            />
          </div>
          <div className={content}>
            <h2>Contact Details</h2>
            <ViewDetail />
          </div>
        </div>

      </div>
      </CurrentContactContextProvider>
    </ContactContextProvider>
  )
}

export default Home;
