import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "../../Components/Message/index";
import Button from "../../Components/Button/index";
import ErrorMessage from "../../Components/Error Message"
import { useNavigate } from "react-router-dom";
import styles from './style.module.css'

const Messages = ({ content }) => {

  const [errorMessage, setErrorMessage] = useState('');
  const [Messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const loadMessages = async () => {
    try {
      if (content == "myMessages") {

        const id = localStorage.getItem("id");
        const res = await axios.get(`http://localhost:8000/api/messages/${id}`);
        
        setMessages(res.data.payload);
      } else if (content == "allMessages") {
        const res = await axios.get("http://localhost:8000/api/messages")
        setMessages(res.data.payload);
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage({ message: error.message, code: error.response.status });
      }
    }
  }

  useEffect(() => {
    loadMessages();
  }, []);

  return (

    <div className={styles.container}>
      {Messages.length === 0 ?
        (<p>No messages yet</p>) :
        (Messages.map((message) => (
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
};

export default Messages;
