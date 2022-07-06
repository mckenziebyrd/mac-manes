import React, { useEffect, useState } from 'react'
import RequestForm from './RequestForm'
import RequestFormButton from './RequestFormButton'

const RequestsList = () => {
  const [requests, updateRequest] = useState([])
    const loggedInUser = parseInt(localStorage.getItem("manes_user")) 



  const updateData = () => {
    Promise.all([
      fetch("http://localhost:8088/requests")
      .then(res => res.json())
      .then((data) => {
        //working on filtering requests that only logged in person sent & stylist view being able to see all of them
    //     const filterData = data.filter((requests) => {
    //       return requests.senderId === loggedInUser
    //  },           
    //  )
          updateRequest(data)
      })
    ]);
  }; 
  // useEffect(
  //   () => {
  //     fetch("http://localhost:8088/requests")
  //         .then(res => res.json())
  //         .then((data) => {
  //             updateRequest(data)
  //         })
  // },
  // []
//)


useEffect(updateData, []);

const deleteRequest = (id) => {
  fetch(`http://localhost:8088/requests/${id}`, {
    method: "DELETE",
  }).then((data) => {
    updateData();
  });
};
  
  return (
    
<div className='posted-requests-container'>
<RequestFormButton />  

        <h2>Submitted Requests</h2>
      {
            requests.map(
                (requestsObject) => {
                    return <div className='postedRequests' key={`request--${requestsObject.id}`}>
                     <button
                     onClick={() => {
                       deleteRequest(requestsObject.id)
                     }}>X</button>
                     <h3>Appointment Request from : {requestsObject.name}</h3> 
                      <p>Descrition: {requestsObject.description}</p>
                      <p>Hair History: {requestsObject.hairHistory}</p>
                      <img src={requestsObject.img}></img>
                      <p>Appointment Time: {requestsObject.appointmentDateTime}</p>
                      </div>
                 }
            )
        }

    </div>
  )
}

export default RequestsList