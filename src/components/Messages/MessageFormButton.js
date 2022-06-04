import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const MessageFormButton = () => {
   const history = useHistory()

  return (
    <button 
    onClick={() => history.push("/messages-form")}
    className='btn'> Send Direct Message
    </button>
  )
}

export default MessageFormButton