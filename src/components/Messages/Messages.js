import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import MessageFormButton from "./MessageFormButton";

const Messages = () => {
  const [messages, updateMessages] = useState([]);
  const [users, updateUser] = useState([]);

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
          updateMessages(data);
        }),
    ]);
  };

  useEffect(updateData, []);

  // useEffect(
  //     () => {

  //   },
  //   []
  // )

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
        const findMessageSender = users.find((user) => {
          return user.id === messageObject.senderId;
        });
        return (
          <div className="message-inbox" key={`message--${messageObject.id}`}>
            <h3>From: {findMessageSender.name}</h3>

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
