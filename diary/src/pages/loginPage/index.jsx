import styles from './style.module.css'
import Button from '../../Components/Button/index'
import Input from '../../Components/Input/index'
import { useNavigate } from 'react-router-dom'
import { Mail, LockKeyhole } from 'lucide-react'

const LoginPage = () => {
    const navigate = useNavigate();
    return (

        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>Login</h1>
                    <div className={styles.labels}>
                        <Mail />
                        <label>Email</label>
                    </div>
                    <Input type='text' placeholder='e.g. JoeDoe@gmail.com'/>

                    <div className={styles.labels}>
                        <LockKeyhole />
                        <label>Password</label>
                    </div>
                    <Input type='password' placeholder='********' />
                    <a href="">Forget password</a>

                    <Button name="/mainPage" title="Login" className={`${styles.btn} main-color text-color`}/>
                </div>
            </div>
            <div className={styles.secondSection}>
                <div className={`${styles.circle} main-color text-color`}>
                    <a onClick={() => { navigate("/signUp") }}><h1 className={styles.title}>Sign up</h1></a>
                    <p className={styles.sentence}>You don't have an account?</p>
                </div>
            </div>

        </div>

    );
}

export default LoginPage