import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const RequestFormButton = () => {
   const history = useHistory()

  return (
    <button 
    onClick={() => history.push("/requests/form")}
    className='btn'> Appointment Request Form
    </button>
  )
}

export default RequestFormButton