import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "../../Components/Message/index";
import styles from './style.module.css'

const Messages = (content) => {
  const [Messages, setMessages] = useState([]);

  const loadMessages = async () => {
    let res;
    if (content == "myMessages") {
      res = await axios.get("http://localhost:8000/api/messages/2");
    } else if (content== "allMessages"){
      res = await axios.get("http://localhost:8000/api/messages")
    } 
    let message = setMessages(res.data.payload);
  }

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className={styles.container}>
      {Messages.map((message) => (
        <Message title={message.title} message={message.message} media={message.media} mood={message.mood} />
      ))}
    </div>
  );
};

export default Messages;
