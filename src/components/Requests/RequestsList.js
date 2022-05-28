import React, { useEffect, useState } from 'react'

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
    <div>
      <h2>Submitted Requests</h2>
      {
            requests.map(
                (requestsObject) => {
                    return <div className='postedRequests' key={`request--${requestsObject.id}`}>
                     <h3>Appointment Request from : {requestsObject.name}</h3> 
                      <p>Descrition: {requestsObject.description}</p>
                      <p>Hair History: {requestsObject.hairHistory}</p>
                      </div>
                 }
            )
        }

    </div>
  )
}

export default RequestsList