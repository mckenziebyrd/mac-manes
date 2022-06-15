import React, { useEffect, useState } from 'react'
import RequestForm from './RequestForm'
import RequestFormButton from './RequestFormButton'

const RequestsList = () => {
  const [requests, updateRequest] = useState([])

  useEffect(
    () => {
      fetch("http://localhost:8088/requests")
          .then(res => res.json())
          .then((data) => {
              updateRequest(data)
          })
  },
  []
)

  
  return (
    
<div className='posted-requests-container'>
<RequestFormButton />  

        <h2>Submitted Requests</h2>
      {
            requests.map(
                (requestsObject) => {
                    return <div className='postedRequests' key={`request--${requestsObject.id}`}>
                     <button>X</button>
                     <h3>Appointment Request from : {requestsObject.name}</h3> 
                      <p>Descrition: {requestsObject.description}</p>
                      <p>Hair History: {requestsObject.hairHistory}</p>
                      <p>Appointment Time: {requestsObject.appointmentDateTime}</p>
                      </div>
                 }
            )
        }

    </div>
  )
}

export default RequestsList