import React, { useEffect, useState } from 'react'
// const loggedInUser =  


const MessageForm = () => {
//     const [loggedInUser, userUpdate] = useState()

// useEffect( () => {
//     userUpdate()
// })

const loggedInUser = parseInt(localStorage.getItem("manes_user"))
  const [message, change] = useState({
      usersId: loggedInUser,
      reciepentId: 1,
      message: "",
      timestamp: Date.now().toString() 
  })
  
  const sendMessage = (evt) => {
      const newMessage = {
          usersId: message.usersId,
          reciepentId: message.reciepentId,
          message: message.message,
          timestamp: message.timestamp
      }

      const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }

    return fetch("http://localhost:8088/messages", fetchOption)
        .then(() => {
            console.log(newMessage)
        })
  }
  const stylistView = () => {loggedInUser === 1 ? console.log("yes") : console.log("no")}
    return (
        
    <div className='message-form-container'>
        <form className='message-form'>
        <h2>Send Direct Message</h2>
        {/* 
        working on stylist view having the option of which client to send to rather
        than all default sending to the stylist
        {(loggedInUser === 1) ?  <fieldset>
            <div className='form-group'>
                <label htmlFor='name'>To: </label>
                <select 
                    type="text"
                    className='form-control'
                    placeholder='Name'   
                    >
                <option>Mac</option>
                </select>
                </div>
        </fieldset> : "client logged in"}
        */}
        <fieldset>
            <div className='form-group'>
                <label htmlFor='direct-message'>Message: </label>
                <textarea 
                    type="text"
                    className='form-message'
                    placeholder='Message to Stylist'
                    onChange={
                        (evt) => {
                            const copy = {...message}
                            copy.message = evt.target.value
                            change(copy)
                        }
                    }
                />
                
            </div>
        </fieldset>
        <button 
        onClick={sendMessage}
        className='btn'>
            Send</button>
        </form>
    </div>
  )
}

export default MessageForm