import React from 'react'
import ApplicationViews from './components/ApplicationViews.js'
import Messages from './components/Messages/Messages.js'
import NavBar from './components/NavBar/NavBar.js'
import RequestForm from './components/Requests/RequestForm.js'
import RequestsList from './components/Requests/RequestsList.js'


export const MacManes = () => {
  return (
    <div className='macManes'>
      <NavBar />
      <ApplicationViews />
      {/* <div className='request-form-container'>
      <RequestForm />
      </div>
      <div className='posted-requests-container'>
      <RequestsList />
      <Messages />
      </div> */}
      </div>
  )
}

