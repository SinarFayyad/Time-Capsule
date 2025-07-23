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

  const message_id = 1;
  return (

    <div className={styles.container} onClick={() => navigate(`/viewMessage/${message_id}`)}>
      {content == "myMessages" && Messages.length === 0 ? (
        <div className={styles.emptyStateContainer}>
          <Button title="Create your first message" onClickListener={() => { navigate("/addMessage") }} className={`main-color text-color`} />
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
