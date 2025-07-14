<<<<<<<< Updated upstream:diary/src/pages/landingPage/landingPage.jsx
import styles from './landingPage.module.css'
import Navbar from '../../Components/Navbar/navbar'
========
import styles from './style.module.css'
import Navbar from '../../Components/Navbar/index'
import Button from '../../Components/Button/index'
>>>>>>>> Stashed changes:diary/src/pages/landingPage/index.jsx
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
<<<<<<<< Updated upstream:diary/src/pages/landingPage/landingPage.jsx
                <button onClick={() => { navigate("/login") }} className={styles.btn}>Login</button>
========
                <Button path="/signup" title="Get Started" className={styles.btn} />
>>>>>>>> Stashed changes:diary/src/pages/landingPage/index.jsx
            </div>
        </div>
    );
}

export default LandingPage;