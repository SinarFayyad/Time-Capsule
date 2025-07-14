import styles from './style.module.css'
import Button from '../../Components/Button/index'
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

                    <a>Forget password</a>


                    <Button name="/mainPage" title="Login" />
                </div>
            </div>
            <div className={styles.secondSection}>
                <div className={styles.circle}>
                    <a onClick={() => { navigate("/signUp") }}><h1 className={styles.title}>Sign up</h1></a>
                    <p className={styles.sentence}>You don't have an account?</p>
                </div>
            </div>

        </div>

    );
}

export default LoginPage