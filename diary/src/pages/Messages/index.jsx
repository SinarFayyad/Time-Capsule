import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "../../Components/Message/index";

const Messages = () => {
  const [Messages, setMessages] = useState([]);

  const loadMessages = async () => {
    const res = await axios.get("http://localhost:8000/api/messages/1");

    console.log(res.data.payload);
    setMessages(res.data.payload);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="MessageContainer">
        {Messages.map((message) => (
          <Message content={message.content}/>
        ))}
      
    </div> 
  );
};

export default Messages;
