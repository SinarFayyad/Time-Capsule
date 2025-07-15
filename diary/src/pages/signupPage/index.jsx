import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { Mail, LockKeyhole, UserRound } from 'lucide-react'
import Button from '../../Components/Button/index'
import Input from '../../Components/Input/index'

const SignUpPage = () => {
    const navigate = useNavigate();
    return (

        <div className={styles.container}>
            <div className={styles.secondSection}>
                <div className={`${styles.circle} main-color text-color`}>
                    <a onClick={() => { navigate("/login") }}><h1 className={styles.title}>Login</h1></a>
                    <p className={styles.sentence}>You don't have an account?</p>
                </div>
            </div>

            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>Sign Up</h1>
                    <div className={styles.labels}>
                        <UserRound />
                        <label>Username</label>
                    </div>
                    <Input type='text' placeholder='e.g. Joe Doe'/>
                    <div className={styles.labels}>
                        <Mail />
                        <label>Email</label>
                    </div>
                    <Input type='text' placeholder='e.g. JoeDoe@gmail.com'/>

                    <div className={styles.labels}>
                        <LockKeyhole />
                        <label>Password</label>
                    </div>
                    <Input type='password' placeholder='********'/>

                    <Button path="/mainPage" title="Sign Up" className={`${styles.btn} main-color text-color`}>Sign Up</Button>
                </div>
            </div>
            

        </div>

    );
}

export default SignUpPage