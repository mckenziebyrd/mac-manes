import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const MessageSingle = () => {
    const [message, set] = useState({})  // State variable for current ticket object
    const { messageId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/messages/${messageId}`)
                .then(res => res.json())
                .then(set)
        },
        [ messageId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <section className="message">
                <h3 className="message--sender">from</h3>
                <div className="message--message">message</div>
            </section>
        </>
    )
}