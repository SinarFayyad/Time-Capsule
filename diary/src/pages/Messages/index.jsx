import axios from "axios";
import React, { useEffect, useState } from "react";
import UserMessage from "../../Components/UserMessage";

const Messages = () => {
  const [Messages, setMessages] = useState([]);

  const loadMessages = async () => {
    const res = await axios.get("./http://jsonplaceholder.typicode.com/posts");

    console.log(res.data);

    setMessages(res.data);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div>
        {Messages.map((message) => (
          <UserMessage content={message.content}/>
        ))}
      
    </div> 
  );
};

export default Messages;
