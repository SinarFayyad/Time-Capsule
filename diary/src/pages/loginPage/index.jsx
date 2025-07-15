import React , { useState,useEffect} from 'react'
import styles from './style.module.css'
import Button from '../../Components/Button/index'
import Input from '../../Components/Input/index'
import { useNavigate } from 'react-router-dom'
import { Mail, LockKeyhole } from 'lucide-react'
import Logo from '../../Components/Logo/index'

const LoginPage = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        console.log("DO Something");
    }, [email]);

    return (
        <div className={styles.container}>
            <Logo />
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>Login</h1>
                    <div className={styles.labels}>
                        <Mail />
                        <label>Email</label>
                    </div>
                    <Input type="text"
                        name='email'
                        hint='e.g. JoeDoe@gmail.com'
                        onChangeListener={(e) => { setEmail(e.target.value) }} />

                    <div className={styles.labels}>
                        <LockKeyhole />
                        <label>Password</label>
                    </div>
                    <Input type='password'
                        name="password"
                        hint='********'
                        onChangeListener={(e) => { setPassword(e.target.value) }}
                    />
                    <a href="">Forget password</a>

                    <Button
                        title="Login"
                        className={`${styles.btn} main-color text-color`}
                        onClickListener={async () => {
                            console.log(email, password);

                            // const res = await axios.post("loginurl", {
                            //   email: email,
                            //   pass: password,
                            // });

                            if (true) {
                                // navigate to dashboard
                                navigate("/mainPage");
                            } else {
                                // display error on the ui
                            }
                        }} 
                    />
                </div>
            </div>
            <div className={styles.secondSection}>
                <a onClick={() => { navigate("/signUp") }}>
                    <div className={`${styles.circle} main-color text-color`}>
                        <h1 className={styles.title}>Sign up</h1>
                        <p className={styles.sentence}>You don't have an account?</p>
                    </div>
                </a>
            </div>

        </div>

    );
}

export default LoginPage