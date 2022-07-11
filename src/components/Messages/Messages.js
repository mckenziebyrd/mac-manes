import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import MessageFormButton from "./MessageFormButton";
import { Link } from "react-router-dom";

const Messages = () => {
  const [messages, updateMessages] = useState([]);
  const [users, updateUser] = useState([]);
  const loggedInUser = parseInt(localStorage.getItem("manes_user")) 


  const updateData = () => {
    Promise.all([
      fetch("http://localhost:8088/users")
        .then((res) => res.json())
        .then((data) => {
          updateUser(data);
        }),
      fetch("http://localhost:8088/messages")
        .then((res) => res.json())
        .then((data) => {
          //filters messages only that have been sent from the logged in user or from stylist. need to add stylist views all
          // const filterData = data.filter((messages) => {
          //     return messages.senderId === loggedInUser || messages.senderId === 1 || 
             
          // },           
          // )
          updateMessages(data);
        }),
    ]);
  };

  useEffect(updateData, []);


  const deleteMessage = (id) => {
    fetch(`http://localhost:8088/messages/${id}`, {
      method: "DELETE",
    }).then((data) => {
      updateData();
    });
  };

  return (
    <div>
      <MessageFormButton />
      <h1>Message Inbox</h1>
      {messages.map((messageObject) => {
        //taking message object id and tranlating it to the name of the sender
        const findMessageSender = users.find((user) => {
          return user.id === messageObject.senderId;
        });

        return (
          <div className="message-inbox" key={`message--${messageObject.id}`}>
            {/* <h3>From: {findMessageSender.name}</h3> */}

        
            
            <button
              onClick={() => {
                deleteMessage(messageObject.id);
              }}
            >
              Delete
            </button>

            <p className="inbox-message">{messageObject.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
