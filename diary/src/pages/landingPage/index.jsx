import styles from './style.module.css'
import Navbar from '../../Components/Navbar/index'
import Button from '../../Components/Button/index'

import {useNavigate} from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.circle}>
                <h2 className={styles.headerTitle}>Welcome to</h2>
                <h1>DEAR DIARY!</h1>
                <p className={styles.myText}> Here is your place to send your messages to the world and recieve messages back!
                    Write your notes, your goals and capsule it,
                    Then let time remind u of the promises u made to urself!
                </p>

                <Button path="/signup" title="Get Started" className={styles.btn} />

            </div>
        </div>
    );
}

export default LandingPage;