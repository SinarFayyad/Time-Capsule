import styles from './style.module.css'
import Navbar from '../../Components/Navbar/index';
import Input from '../../Components/Input/index';
import Button from '../../Components/Button/index';
import Footer from '../../Components/Footer/index'
import { Smile, Meh, Frown, Paperclip, Captions, CalendarFold, LocationEdit, FolderLock } from 'lucide-react'
import { useState } from 'react';

const AddMessage = () => {
    const [privacy, setPrivacy] = useState({
        private: false,
        public: false,
        unlisted: false,
    });

    const handlePrivacyChange = (e) => {
        const { name, checked } = e.target;
        setPrivacy(prev => ({ ...prev, [name]: checked }));
    };

    return (
        <div className={styles.container}>
            <Navbar />
            <form className={styles.form}>
                <div className={styles.leftColumn}>
                    <div className={`${styles.message} border`}>
                        <div className={styles.header}>
                            <p>Choose your mood</p>
                            <div className={styles.mood}>
                                <Smile />
                                <Meh />
                                <Frown />
                            </div>
                        </div>
                        <div className='divider'></div>
                        <div className={styles.divider}></div>

                        <div className={styles.content}>
                            <textarea className={styles.textarea} placeholder="Write your message"></textarea>
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
                        <Input type="text" name="title" hint="e.g Good memories" className={`border`} required={false} onChangeListener={() => { }} />
                    </div>
                    <div className={styles.cadre}>
                        <div className={styles.inputs}>
                            <CalendarFold />
                            <span>Choose the reveal date</span>
                        </div>
                        <Input type="date" name="revealDate" hint="MM/DD/YYYY" className={`border`} required={false} onChangeListener={() => { }} />
                    </div>
                    <div className={styles.cadre}>
                        <div className={styles.inputs}>
                            <LocationEdit />
                            <span>Select your location</span>
                        </div>
                        <Input type="text" name="location" hint="e.g Beirut" className={`border`} required={false} onChangeListener={() => { }} />
                    </div>
                    <div className={styles.cadre}>
                        <div className={styles.inputs}>
                            <FolderLock />
                            <span>Privacy</span>
                        </div>
                        <div>
                            <input type="checkbox" name="private" checked={privacy.private} onChange={handlePrivacyChange} className={styles.option} />
                            <label>Private</label>

                            <input type="checkbox" name="public" checked={privacy.public} onChange={handlePrivacyChange} className={styles.option} />
                            <label>Public </label>

                            <input type="checkbox" name="unlisted" checked={privacy.unlisted} onChange={handlePrivacyChange} className={styles.option} />
                            <label>Unlisted</label>
                        </div>
                    </div>
                    <Button title="Save message" className={`${styles.btn} main-color text-color`} onClickListener={SubmitEvent} />
                </div>
            </form>
            <Footer/>
        </div>
    );
}

export default AddMessage
