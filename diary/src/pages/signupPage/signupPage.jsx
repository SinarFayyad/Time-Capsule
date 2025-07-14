import styles from './signupPage.module.css'
import { useNavigate } from 'react-router-dom'
import { UserRound, Mail, LockKeyhole } from 'lucide-react'

const SignUpPage = () => {
    const navigate = useNavigate();
    return (

        <div className={styles.container}>
            <a onClick={() => { navigate("/login") }}>
                <div className={styles.secondSection}>
                    <div className={styles.circle}>
                        <h1 className={styles.title}>Login</h1>
                        <p className={styles.sentence}>You don't have an account?</p>
                    </div>
                </div>
            </a>

            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>Sign Up</h1>
                    <div className={styles.labels}>
                        <UserRound />
                        <label>Username</label>
                    </div>
                    <input type='text' placeholder='Joe Doe'></input>
                    <div className={styles.labels}>
                        <Mail />
                        <label>Email</label>
                    </div>
                    <input type='text' placeholder='e.g. JoeDoe@gmail.com'></input>

                    <div className={styles.labels}>
                        <LockKeyhole />
                        <label>Password</label>
                    </div>
                    <input type='password' placeholder='********'></input>

                    <button onClick={() => { navigate("/mainPage") }} className={styles.btn}>Sign Up</button>
                </div>
            </div>


        </div>

    );
}

export default SignUpPage