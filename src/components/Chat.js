// src/components/Chat.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { currentUser } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    setMessages([...messages, { user: currentUser.email, text: message }]);
    setMessage("");
  }

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.user}:</strong> {msg.text}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
