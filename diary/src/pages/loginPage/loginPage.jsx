import styles from './loginPage.module.css'
import { useNavigate } from 'react-router-dom'
import { Mail, LockKeyhole } from 'lucide-react'

const LoginPage = () => {
    const navigate = useNavigate();
    return (

        <div className={styles.login_container}>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>Login</h1>
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
                    <p>Forget password</p>

                    <button onClick={() => { navigate("/mainPage") }} className={styles.login_btn}>Login</button>
                </div>
            </div>
            <a onClick={() => { navigate("/signUp") }}>
                <div className={styles.secondSection}>
                    <div className={styles.circle}>
                        <h1 className={styles.title}>Sign up</h1>
                        <p className={styles.sentence}>You don't have an account?</p>
                    </div>
                </div>
            </a>

        </div>

    );
}

export default LoginPage