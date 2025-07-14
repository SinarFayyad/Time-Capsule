import styles from './style.module.css'
import Navbar from '../../Components/Navbar/index'
import Button from '../../Components/Button/index'
import {useNavigate} from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();
    return (
        <div className={`${styles.container} text-color`}>
            <Navbar />
            <div className={`${styles.circle} main-color`}>
                <h2 className={styles.headerTitle}>Welcome to</h2>
                <h1>DEAR FUTURE ME!</h1>
                <p className={styles.myText}> Here is your place to send your messages to the world and receive messages back!
                    Write your notes, your goals and capsule it.
                    Then let time remind you of the promises you made to yourself!
                </p>
                <Button path="/signup" title="Get Started" className={`secondary-color text-color`} />
            </div>
        </div>
    );
}

export default LandingPage;