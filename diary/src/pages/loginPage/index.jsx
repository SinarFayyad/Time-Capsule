import axios from 'axios'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Components/Logo/index'
import Input from '../../Components/Input/index'
import { Mail, LockKeyhole } from 'lucide-react'
import React, { useState, useEffect } from 'react'
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
            const res = await axios.post("http://localhost:8000/api/login", {
                email: email,
                password: password,
            });

            if (res.status === 200) {
                navigate("/mainPage");
            }
        } catch (error) {
            if (error.response) {
                // Log backend error message for debugging
                console.log("Backend error message:", error.response.data?.message || '');
                // Custom error messages based on backend error message
                const backendMessage = error.response.data?.message || '';
                if (error.response.status === 401) {
                    if (backendMessage.toLowerCase().includes('user not found') || backendMessage.toLowerCase().includes('no account')) {
                        setErrorMessage({ message: "You don't have an account, try to sign up" });
                    } else if (backendMessage.toLowerCase().includes('wrong password')) {
                        setErrorMessage({ message: "Wrong password" });
                    } else {
                        setErrorMessage({ message: backendMessage || "Unauthorized access" });
                    }               
                } else {
                    setErrorMessage({ message: error.message, code: error.response.status });
                }
            } else {
                setErrorMessage({ message: error.message });
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
