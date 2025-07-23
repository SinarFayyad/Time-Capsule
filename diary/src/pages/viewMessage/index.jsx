import styles from './style.module.css'
import Navbar from '../../Components/Navbar/index'
import Footer from '../../Components/Footer/index'
import { Smile, Meh, Frown } from 'lucide-react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ErrorMessage from '../../Components/Error Message'


const MoodEmoji = ({ mood, className }) => {
    switch (mood) {
        case 'happy':
            return <Smile className={className} />
        case 'sad':
            return <Meh className={className} />
        case 'angry':
            return <Frown className={className} />
        default:
            return null
    }
}

const ViewMessage = async () => {


    const [info, setInfo] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // const message_id = localStorage.getItem("id");
    const message_id = 1;
    try {
        const res = await axios.get(`http://localhost:8000/api/message/${message_id}`);
        if (res.status === 200) {
            info = res.data.payload;
        }
    } catch (error) {
        if (error.response) {
            setErrorMessage({ message: error.message, code: error.response.status });
        }
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.leftColumn}>
                    <div className={`${styles.message} border`}>
                        <div className={styles.header}>
                            <p className={styles.title}>{info.title}</p>
                            <div className={`${styles.mood} main-color`}>
                                <MoodEmoji mood={info.mood} className={styles.emoji} />
                            </div>
                        </div>
                        <div className='divider'></div>
                        <div className={styles.divider}></div>
                        <div className={styles.infoSection}>
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Location</label>
                                <p className={styles.value}>{info.location}</p>
                            </div>
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Date</label>
                                <p className={styles.value}>{info.date}</p>
                            </div>
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Privacy</label>
                                <p className={styles.value}>{info.privacy}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {errorMessage && (
                    <ErrorMessage
                        message={errorMessage.message || errorMessage}
                        errorCode={errorMessage.code}
                        onClose={() => setErrorMessage('')}
                    />
                )}
            </div>
            <Footer />
        </div>
    )
}

export default ViewMessage
