import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "../../Components/Message/index";
import Button from "../../Components/Button/index";
import { useNavigate } from "react-router-dom";
import styles from './style.module.css'

const Messages = ({ content }) => {
  const [Messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const loadMessages = async () => {
    if (content == "myMessages") {

      const id = localStorage.getItem("id");
      const res = await axios.get(`http://localhost:8000/api/messages/${id}`);
      let message = setMessages(res.data.payload);
    } else if (content == "allMessages") {
      const res = await axios.get("http://localhost:8000/api/messages")
      let message = setMessages(res.data.payload);
    }
  }

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className={styles.container}>
      {Messages.length === 0 ? (
        <div className={styles.emptyStateContainer}>
          <Button title="Create your first message" onClickListener={() => {navigate("/addMessage")}} className={`main-color text-color`}/>
        </div>
      ) : (
        Messages.map((message) => (
          <Message key={message.id}
            title={message.title}
            message={message.message}
            media={message.media}
            mood={message.mood} />
        ))
      )}
    </div>
  );
};

export default Messages;
