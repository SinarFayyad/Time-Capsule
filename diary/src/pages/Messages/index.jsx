import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Message from "../../Components/Message/index";
import ErrorMessage from "../../Components/Error Message"
import { useNavigate } from "react-router-dom";
import styles from './style.module.css'

const Messages = ({ content, filteredMessages }) => {

  const [errorMessage, setErrorMessage] = useState('');
  const [Messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const loadMessages = async () => {
    try {
      if (content == "myMessages") {

        const id = localStorage.getItem("id");
        const res = await axios.get(`http://localhost:8000/api/v0.1/messages/${id}`);

        setMessages(res.data.payload);
      } else if (content == "allMessages") {
        const res = await axios.get("http://localhost:8000/api/v0.1/messages")
        setMessages(res.data.payload);
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage({ message: error.message, code: error.response.status });
      }
    }
  }

  useEffect(() => {
    if (!filteredMessages) {
      loadMessages();
    }
  }, [content, filteredMessages]);

  const messages = filteredMessages || Messages;

  if (content === "myMessages") {
    return (
      <div className={styles.scrollContainer}>
        {messages.length === 0 ?
          (<p>No messages yet</p>) :
          (messages.map((message) => (
            <div className={styles.messageWrapper} key={message.id}>
              <Message onClick={() => navigate(`/viewMessage/${message.id}`)}
                title={message.title}
                message={message.message}
                media={message.media}
                mood={message.mood} />
            </div>
          ))
          )}
        {errorMessage && (
          <ErrorMessage
            message={errorMessage.message || errorMessage}
            errorCode={errorMessage.code}
            onClose={() => setErrorMessage('')}
          />
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        {messages.length === 0 ?
          (<p>No messages yet</p>) :
          (messages.map((message) => (
            <Message onClick={() => navigate(`/viewMessage/${message.id}`)}
              key={message.id}
              title={message.title}
              message={message.message}
              media={message.media}
              mood={message.mood} />
          ))
          )}
        {errorMessage && (
          <ErrorMessage
            message={errorMessage.message || errorMessage}
            errorCode={errorMessage.code}
            onClose={() => setErrorMessage('')}
          />
        )}
      </div>
    );
  }
};

export default Messages;
