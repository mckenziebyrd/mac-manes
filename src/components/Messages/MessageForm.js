import React, { useEffect, useState } from 'react'
const MessageForm = () => {

const [users, updateUser] = useState([])
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
 // const stylistView = () => {loggedInUser === 1 ? console.log("yes") : console.log("no")}

  useEffect(
    () => {
        fetch("http://localhost:8088/users")
        .then((res) => res.json())
        .then((data) => {
          updateUser(data);
          
    })}, [])

    return (
        
    <div className='message-form-container'>
        <form className='message-form'>
        <h2>Send Direct Message</h2>
        
       {/* working on stylist view having the option of which client to send to rather than all default sending to the stylist */}
        {(loggedInUser === 1) ?  <fieldset>
            <div className='form-group'>
                <label htmlFor='name'>To: </label>
                <select 
                    type="text"
                    className='form-control'
                    placeholder='Client'   
                    onChange={
                    //    sending reciepentId as a string and not integer
                        (evt) => {
                            const copy = {...message}
                            copy.reciepentId = evt.target.value
                            change(copy)
                        }
                    }
                    >
                          {
                            users.map(e => <option key={`users--${e.id}`} value={e.id}>{e.name}</option>)
                        }
                </select>
                </div>
        </fieldset> : ""}
       
        <fieldset>
            <div className='form-group'>
                <label htmlFor='direct-message'>Message: </label>
                <textarea 
                    type="text"
                    className='form-message'
                    placeholder={(loggedInUser === 1) ? 'Message to Client' : 'Message to Stylist'}
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