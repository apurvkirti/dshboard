
import React, { useState } from "react";


export default function Mail() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
   
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:
        <input type="email" value={to} onChange={(e) => setTo(e.target.value)} />
      </label>
      <br />
      <label>
        Subject:
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
