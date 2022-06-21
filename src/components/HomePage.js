import { logDOM } from '@testing-library/react'
import React from 'react'
import MessageFormButton from './Messages/MessageFormButton'
import RequestFormButton from './Requests/RequestFormButton'
import "./HomePage.css"


const HomePage = () => {
  return (
    <div className='home-container'>  
        <h1>Welcome to Mac Manes Client Booking Portal</h1>
        <img src="./images/McKenzie-Logo.png" width={400}/>
        <RequestFormButton />
        <MessageFormButton />
    </div>
  )
}

export default HomePage