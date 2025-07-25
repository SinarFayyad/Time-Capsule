import axios from 'axios'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Components/Logo/index'
import Input from '../../Components/Input/index'
import { Mail, LockKeyhole } from 'lucide-react'
import React, { useState} from 'react'
import Button from '../../Components/Button/index'
import ErrorMessage from '../../Components/Error Message/index'


const LoginPage = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/api/v0.1/login", {
                email: email,
                password: password,
            });

            if (res.status === 200) {
                localStorage.setItem('token', res.data.payload.token);
                localStorage.setItem('id', res.data.payload.id);
                navigate("/mainPage");
            }
        } catch (error) {
            if (error.response) {
                setErrorMessage({ message: error.message, code: error.response.status });
            }
        }
    };

    return (
        <div className={styles.container}>
            <Logo />
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>Login</h1>
                    <form onSubmit={handleSubmit}>
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
                        {/* <a href="">Forget password</a> */}

                        <Button
                            title="Login"
                            className={`${styles.btn} main-color text-color`}
                            type="submit"
                        />
                    </form>
                    {errorMessage && (
                        <ErrorMessage
                            message={errorMessage.message || errorMessage}
                            errorCode={errorMessage.code}
                            onClose={() => setErrorMessage('')}
                        />
                    )}
                </div>
            </div>
            <div className={styles.secondSection}>
                <div onClick={() => { navigate("/signUp") }}>
                    <div className={`${styles.circle} main-color text-color`}>
                        <h1 className={styles.title}>Sign up</h1>
                        <p className={styles.sentence}>You don't have an account?</p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default LoginPage
