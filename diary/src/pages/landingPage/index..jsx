import styles from './style.module.css'
import Navbar from '../../Components/Navbar/index'
import {useNavigate} from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.circle}>
                <h2 className={styles.headerTitle}>Welcome to</h2>
                <h1>Dear Future Me!</h1>
                <p className={styles.myText}> Here is your place to send your messages to the world and receive messages back!
                    Write your notes, your goals and capsule it,
                    Then let time remind you of the promises you made to yourself!
                </p>
                <button onClick={() => { navigate("/signup") }} className={styles.btn}>Get Started</button>
            </div>
        </div>
    );
}

export default LandingPage;