import React, { useState, useEffect } from 'react';
import styles from './style.module.css'
import Messages from '../Messages/index'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import SearchBar from '../../Components/Search'
import Capsules from '../../pages/Capsules/index'
import Filtrations from '../../Components/Filtrations'
import axios from 'axios';

function MainPage() {
  const [allMessages, setAllMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState(null);

  useEffect(() => {
    const fetchAllMessages = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/messages");
        setAllMessages(res.data.payload);
      } catch (error) {
        console.error("Failed to fetch all messages", error);
      }
    };
    fetchAllMessages();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h2 className={styles.title}>Your messages</h2>
        <div className={styles.yourMessages}>
          <h3 className={styles.subtitle}>Upcoming</h3>
          <Capsules />
          <h3 className={styles.subtitle}>Memories</h3>
          <Messages content={"myMessages"} />
        </div>
        <div className={styles.people}>
          <h2 className={styles.title}>World's messages</h2>
          <div>
            <Filtrations allMessages={allMessages} onFilter={setFilteredMessages} />
            <Messages content={'allMessages'} filteredMessages={filteredMessages} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage
