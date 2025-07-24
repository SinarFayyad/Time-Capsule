import axios from "axios";
import React, { useEffect, useState } from "react";
import Capsule from "../../Components/Capsule/index";
import ErrorMessage from "../../Components/Error Message"
import styles from './style.module.css'

const Capsules = ({ content }) => {

  const [errorMessage, setErrorMessage] = useState('');
  const [Capsules, setCapsules] = useState([]);

  const loadCapsules = async () => {
    try {
      const user_id = localStorage.getItem("id");
      const res = await axios.get(`http://localhost:8000/api/v0.1/getCapsules/${user_id}`);
      const sortedCapsules = res.data.payload.sort((a, b) => new Date(a.reveal_date) - new Date(b.reveal_date));
      setCapsules(sortedCapsules);
    } catch (error) {
      if (error.response) {
        setErrorMessage({ message: error.message, code: error.response.status });
      }
    }
  }

  useEffect(() => {
    loadCapsules();
  }, []);

  return (
    <div className={`${styles.container}`}>
      {Capsules.length === 0 ?
        (<p>No capsules yet</p>) :
        (Capsules.map((capsule) => (
          <Capsule
            key={capsule.id}
            title={capsule.title}
            reveal_date={capsule.reveal_date}
          />
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

export default Capsules;
