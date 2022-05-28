import React from 'react'
import NavBar from './components/NavBar/NavBar.js'
import RequestForm from './components/RequestForm.js'


export const MacManes = () => {
  return (
    <div className='macManes'>
      <NavBar />
      <h1>MacManes</h1>
      <div className='container'>
      <RequestForm />
      </div>
      </div>
  )
}

