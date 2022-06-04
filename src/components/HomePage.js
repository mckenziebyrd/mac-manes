import React from 'react'
import MessageFormButton from './Messages/MessageFormButton'
import RequestFormButton from './Requests/RequestFormButton'

const HomePage = () => {
  return (
    <div className='home-container'>
        <h1>WELCOME</h1>
        <RequestFormButton />
        <MessageFormButton />
    </div>
  )
}

export default HomePage