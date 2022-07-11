import { Select } from "@mui/material"
import React, { useEffect, useState } from "react"
import {  useHistory, useParams } from "react-router-dom"

export const MessageSingle = () => {
    const [message, set] = useState({})  // State variable for current ticket object
    const { messageId } = useParams()  // Variable storing the route parameter
    const history = useHistory()

    useEffect(
        () => {
            fetch(`http://localhost:8088/messages/${messageId}?_expand=users`)
                .then(res => res.json())
                .then((data) => {
                    set(data)
                })
                console.log(message)
        },
        [ messageId ]  // Above function runs when the value of ticketId change
    )

        const updateMessage = (evt) => {

            const updatedMessage = {
                usersId: message.usersId,
                reciepentId: message.reciepentId,
                message: message.message,
                timestamp: message.timestamp,
              }

             // Perform the PUT HTTP request to replace the resource
        fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedMessage)
        })
            .then(() => {
                history.push("/messages")
            }) 
        }

    return (
        <>
            <div className="message-inbox">
               <form>
                <h3 className="message--sender">From {message.users?.name}</h3>
                <textarea
                type="text"
                key={`message--${message.id}`}
                className="inbox-message"
                defaultValue={message.message}
                
                >
                </textarea>
           <button
           onChange={updateMessage}
           >Edit</button>
            </form>
            
            </div>s
        </>
    )
}