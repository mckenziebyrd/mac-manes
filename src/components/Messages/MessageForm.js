import React, { useState } from 'react'
const loggedInUser = parseInt(localStorage.getItem("manes_user")) 

const MessageForm = () => {
  const [message, change] = useState({
      senderId: loggedInUser,
      reciepentId: 1,
      message: "",
      timestamp: Date.now().toString() 
  })
  
  const sendMessage = (evt) => {
      const newMessage = {
          senderId: message.senderId,
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
  
    return (
    <div className='message-form-container'>
        <form className='message-form'>
        <h2>Send Direct Message</h2>
        {/* <fieldset>
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
        </fieldset> */}
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