import React from 'react'
import MessageFormButton from './Messages/MessageFormButton'
import RequestFormButton from './Requests/RequestFormButton'

const HomePage = () => {
  return (
    <div className='home-container'>
        <RequestFormButton />
        <MessageFormButton />
    </div>
  )
}

export default HomePage