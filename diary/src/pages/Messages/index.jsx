import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "../../Components/Message/index";
import styles from './style.module.css'

const Messages = () => {
  const [Messages, setMessages] = useState([]);

  const loadMessages = async () => {
    const res = await axios.get("http://localhost:8000/api/messages/4");
    let message = setMessages(res.data.payload);
  };

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
