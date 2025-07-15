import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { Mail, LockKeyhole, UserRound } from 'lucide-react'
import Button from '../../Components/Button/index'
import Input from '../../Components/Input/index'
import Logo from '../../Components/Logo/index'

const SignUpPage = () => {
    const navigate = useNavigate();
    return (

        <div className={styles.container}>
            
            <div className={styles.secondSection}>
                <a onClick={() => { navigate("/login") }}>
                    <div className={`${styles.circle} main-color text-color`}>
                        <h1 className={styles.title}>Login</h1>
                        <p className={styles.sentence}>You don't have an account?</p>
                    </div>
                </a>
            </div>
            <Logo/>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>Sign Up</h1>
                    <div className={styles.labels}>
                        <UserRound />
                        <label>Username</label>
                    </div>
                    <Input type='text' hint='e.g. Joe Doe' />
                    <div className={styles.labels}>
                        <Mail />
                        <label>Email</label>
                    </div>
                    <Input type='text' hint='e.g. JoeDoe@gmail.com' />

                    <div className={styles.labels}>
                        <LockKeyhole />
                        <label>Password</label>
                    </div>
                    <Input type='password' hint='********' />

                    <Button path="/mainPage" title="Sign Up" className={`${styles.btn} main-color text-color`}>Sign Up</Button>
                </div>
            </div>


        </div>

    );
}

export default SignUpPage