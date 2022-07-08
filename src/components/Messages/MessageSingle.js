import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const MessageSingle = () => {
    const [message, set] = useState({})  // State variable for current ticket object
    const { messageId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/messages/${messageId}?_expand=users`)
                .then(res => res.json())
                .then(set)
        },
        [ messageId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <div className="message-inbox">
                <h3 className="message--sender">from {message.users?.name}</h3>
                <p className="inbox-message">{message.message}</p>
            </div>
        </>
    )
}