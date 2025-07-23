import axios from 'axios'
import { useState } from 'react'
import styles from './style.module.css'
import Input from '../../Components/Input/index'
import Button from '../../Components/Button/index'
import Footer from '../../Components/Footer/index'
import Navbar from '../../Components/Navbar/index'
import ErrorMessage from '../../Components/Error Message'
import { Smile, Meh, Frown, Paperclip, Captions, CalendarFold, LocationEdit, FolderLock } from 'lucide-react'

const AddMessage = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [mood, setMood] = useState("");
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [privacy, setPrivacy] = useState({
        private: false,
        public: false,
        unlisted: false,
    });

    const id = localStorage.getItem("id");

    const submitForm = async (e) => {
        e.preventDefault();

        console.log(date);
        try {
            const res = await axios.post("http://localhost:8000/api/addMessage", {
                "user_id": id,
                "title": title,
                "color": "white",
                "mood": mood,
                "message": message,
                "audio": "null",
                "media": "null",
                "reveal_date": date,
                "location": location,
                "privacy": privacy
            });
        } catch (error) {
            if (error.response) {
                setErrorMessage({ message: error.message, code: error.response.status });
            }
        }

    }
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.form}>
                <div className={styles.leftColumn}>
                    <div className={`${styles.message} border`}>
                        <div className={styles.header}>
                            <p>Choose your mood</p>
                            <div className={styles.mood}>
                                <Smile onClick={() => { setMood("happy") }} className={mood == "happy" && styles.selected} />
                                <Meh onClick={() => { setMood("neutral") }} className={mood == "neutral" && styles.selected} />
                                <Frown onClick={() => { setMood("sad") }} className={mood == "sad" && styles.selected} />
                            </div>
                        </div>
                        <div className='divider'></div>
                        <div className={styles.divider}></div>

                        <div className={styles.content}>
                            <textarea className={styles.textarea} placeholder="Write your message" onChangeListener={(e) => { setMessage(e.target.value) }}></textarea>
                            <Paperclip className={styles.paperclip} />
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.cadre}>
                        <div className={styles.inputs}>
                            <Captions />
                            <span>Select title for your messages</span>
                        </div >
                        <Input type="text"
                            name="title"
                            hint="e.g Good memories"
                            className={`border`}
                            required={true}
                            onChangeListener={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className={styles.cadre}>
                        <div className={styles.inputs}>
                            <CalendarFold />
                            <span>Choose the reveal date</span>
                        </div>
                        <Input type="Date"
                            name="revealDate"
                            hint="MM/DD/YYYY"
                            className={`border`}
                            required={true}
                            onChangeListener={(e) => { setDate(e.target.value) }} />
                    </div>
                    <div className={styles.cadre}>
                        <div className={styles.inputs}>
                            <LocationEdit />
                            <span>Select your location</span>
                        </div>
                        <Input type="text"
                            name="location"
                            hint="e.g Beirut"
                            className={`border`}
                            required={true}
                            onChangeListener={(e) => { setLocation(e.target.value) }} />
                    </div>
                    <div className={styles.cadre}>
                        <div className={styles.inputs}>
                            <FolderLock />
                            <span>Privacy</span>
                        </div>
                        <div>
                            <input type="checkbox"
                                name="private"
                                onChange={(e) => setPrivacy(prev => ({ ...prev, private: e.target.checked }))}
                                className={styles.option} />

                            <label>Private</label>

                            <input type="checkbox"
                                name="public"
                                onChange={(e) => setPrivacy(prev => ({ ...prev, public: e.target.checked }))}
                                className={styles.option} />

                            <label>Public </label>

                            <input type="checkbox"
                                name="unlisted"
                                onChange={(e) => setPrivacy(prev => ({ ...prev, unlisted: e.target.checked }))}
                                className={styles.option} />

                            <label>Unlisted</label>
                        </div>
                    </div>
                    <Button title="Save message" className={`${styles.btn} main-color text-color`} onClickListener={submitForm} />
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
    );
}

export default AddMessage
