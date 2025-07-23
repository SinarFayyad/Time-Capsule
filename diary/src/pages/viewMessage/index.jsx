import styles from './style.module.css'
import Navbar from '../../Components/Navbar/index'
import Footer from '../../Components/Footer/index'
import { Smile, Meh, Frown } from 'lucide-react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ErrorMessage from '../../Components/Error Message'
import { useLocation } from 'react-router-dom'


const MoodEmoji = ({ mood }) => {
    switch (mood) {
        case 'happy':
            return <Smile />
        case 'sad':
            return <Meh />
        case 'angry':
            return <Frown />
        default:
            return null
    }
}

const ViewMessage = () => {

    const location = useLocation()
    const [info, setInfo] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const getMessage = async () => {
        try {
            const splitted = location.pathname.split('/');
            const message_id = splitted[splitted.length - 1];
            const res = await axios.get(`http://localhost:8000/api/message/${message_id}`);
            if (res.status === 200) {
                info = setInfo(res.data.payload);
            }
        } catch (error) {
            if (error.response) {
                setErrorMessage({ message: error.message, code: error.response.status });
            }
        }
    }
    useEffect(() => {
        getMessage();
    }, []);

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                    <div className={`${styles.message} border`}>
                        <div className={styles.header}>
                            <p className={styles.title}>{info.title}</p>
                            <div className={`${styles.mood}`}>
                                <MoodEmoji mood={info.mood} />
                            </div>
                        </div>
                        <div className='divider'></div>
                        <div className={`${styles.infoItem} ${styles.text}`}>
                            <p className={styles.value}>{info.message}</p>
                        </div>
                        <div className='divider'></div>
                        <div className={styles.infoSection}>
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Location</label>
                                <p className={styles.value}>{info.location}</p>
                            </div>
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Date</label>
                                <p className={styles.value}>{info.reveal_date}</p>
                            </div>
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Privacy</label>
                                <p className={styles.value}>{info.privacy}</p>
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
