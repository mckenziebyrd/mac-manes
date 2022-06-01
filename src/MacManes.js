import React from 'react'
import ApplicationViews from './components/ApplicationViews.js'
import NavBar from './components/NavBar/NavBar.js'
import RequestForm from './components/Requests/RequestForm.js'
import RequestsList from './components/Requests/RequestsList.js'
import Messages from './components/Messages/Messages.js'
import RequestFormButton from './components/Requests/RequestFormButton.js'
import HomePage from './components/HomePage.js'

export const MacManes = () => {
  return (
    <div className='macManes'>
      <NavBar />
      <HomePage />
      <ApplicationViews />
      </div>
  )
}

