import React, { useState } from 'react'
// const loggedInUser = parseInt(localStorage.getItem("gg_user")) 

const MessageForm = () => {
  const [message, change] = useState({
      senderId: "loggedinUser",
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