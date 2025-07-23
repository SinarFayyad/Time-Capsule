import axios from 'axios'
import { useState } from 'react'
import styles from './style.module.css'
import Input from '../../Components/Input/index'
import Button from '../../Components/Button/index'
import Footer from '../../Components/Footer/index'
import Navbar from '../../Components/Navbar/index'
import ErrorMessage from '../../Components/Error Message'
import SuccessMessage from '../../Components/Success Message'
import { Smile, Meh, Frown, Paperclip, Captions, CalendarFold, LocationEdit, FolderLock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const AddMessage = () => {

    const navigate = useNavigate();
    const [mood, setMood] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [location, setLocation] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [privacy, setPrivacy] = useState("");

    const id = localStorage.getItem("id");

    const submitForm = async (e) => {

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

            if(res.status==200){
                <SuccessMessage message="Message Added Successfully"/>
                navigate('/mainPage');
            }
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
                            <textarea className={styles.textarea} 
                                placeholder="Write your message" 
                                onChange={(e) => { setMessage(e.target.value) }}></textarea>
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
                                onChange={(e) => setPrivacy("private")}
                                className={styles.option} />

                            <label>Private</label>

                            <input type="checkbox"
                                name="public"
                                onChange={(e) => setPrivacy("public")}
                                className={styles.option} />

                            <label>Public </label>

                            <input type="checkbox"
                                name="unlisted"
                                onChange={(e) => setPrivacy("unlisted")}
                                className={styles.option} />

                            <label>Unlisted</label>
                        </div>
                    </div>
                    <Button title="Save message" 
                            className={`${styles.btn} main-color text-color`} 
                            onClickListener={()=>submitForm()} />
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
