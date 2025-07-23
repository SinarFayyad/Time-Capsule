import axios from "axios";
import React, { useEffect, useState } from "react";
import Capsule from "../../Components/Capsule/index";
import Button from "../../Components/Button/index";
import { useNavigate } from "react-router-dom";
import styles from './style.module.css'

const Capsules = ({ content }) => {
  const [Capsules, setCapsules] = useState([]);
  const navigate = useNavigate();

  const loadCapsules = async () => {
    const user_id = localStorage.getItem("id");
    const res = await axios.get(`http://localhost:8000/api/getCapsules/${user_id}`);
    setCapsules(res.data.payload);
  }

  useEffect(() => {
    loadCapsules();
  }, []);

  return (
    <div className={`${styles.container} border`}>
      {Capsules.length === 0 ?null:
        Capsules.map = ((capsule) => {
        <Capsule key={capsule.id}
          title={capsule.title}
          reveal_date={capsule.reveal_date}
        />
      })}  
    </div>
  );
};

export default Capsule;
