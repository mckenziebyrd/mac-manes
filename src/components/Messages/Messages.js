import React, { useState , useEffect} from 'react'
import DeleteButton from './DeleteButton'
import MessageFormButton from './MessageFormButton'

const Messages = () => {
    const [messages, updateMessages] = useState([])
    const [user, updateUser] = useState([])

    useEffect(
        () => {
          fetch("http://localhost:8088/messages")
              .then(res => res.json())
              .then((data) => {
                  updateMessages(data)
              })
      },
      []
    )
    
    useEffect(
        () => {
          fetch("http://localhost:8088/users")
              .then(res => res.json())
              .then((data) => {
                  updateUser(data)
                  
              })
      },
      []
    )
    
    const deleteMessage = (id) => {
        fetch(`http://localhost:8088/messages/${id}`, {
            method: "DELETE"
        })
    }

  return (
    <div>
        <MessageFormButton />
         <h1>Message Inbox</h1>
    {
        messages.map(
            (messageObject) => {
                
        
        
        const findMessageSender = user.find(
        (users) => {
            return users.name === messageObject.senderId
        }
    )
             return <div className='message-inbox' key={`message--${messageObject.id}`}>
        <h3>From: {messageObject.senderId}</h3>

        <button onClick={() => {
            deleteMessage(messages.id)}}>Delete</button>

        <p className='inbox-message'>{messageObject.message}</p>
    </div>  
            }
        )

        }

    </div>
  )
}

export default Messages