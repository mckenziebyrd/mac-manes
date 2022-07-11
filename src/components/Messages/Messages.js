import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import MessageFormButton from "./MessageFormButton";
import { Link } from "react-router-dom";

const Messages = () => {
  const [messages, updateMessages] = useState([]);
  const [users, updateUser] = useState([]);
  const loggedInUser = parseInt(localStorage.getItem("manes_user")) 

//   useEffect(
//     () => {
//         fetch(`http://localhost:8088/messages?_expand=users`)
//             .then(res => res.json())
//             .then((data) => {
              
//                 updateMessages(data)
//             })
//     },
//     []
// )

  const updateData = () => {
    Promise.all([
      fetch("http://localhost:8088/users")
        .then((res) => res.json())
        .then((data) => {
          updateUser(data);
        }),
      fetch(`http://localhost:8088/messages?_expand=users`)
        .then((res) => res.json())
        .then((data) => {
          //filters messages only that have been sent from the logged in user or from stylist. need to add stylist views all
          const filterData = data.filter((messages) => {
            
            
      
              return messages.usersId === loggedInUser 
              // need to find a way to show all messages if stylist is logged in 
              // || messages.reciepentId === 1  
          }
          )
          updateMessages(filterData);
        }),
    ]);
  };

  useEffect(updateData, []);


  const deleteMessage = (id) => {
    fetch(`http://localhost:8088/messages/${id}`, {
      method: "DELETE",
    }).then((data) => {
      updateMessages();
    });
  };


 

  return (
    <div>
      <MessageFormButton />
      <h1>Message Inbox</h1>
      {messages.map((messageObject) => {
       
        return (
          <div className="message-inbox" key={`message--${messageObject.id}`}>
            <h3>From: {messageObject.users.name}</h3>

          <button
           className="btn-secondary"><Link className="edit-link" to={`messages/${messageObject.id}`}>Edit</Link>
            
          </button>
            
            <button
             className="btn-secondary"
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
