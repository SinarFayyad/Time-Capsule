import axios from 'axios'
import styles from './style.module.css'
import { useEffect, useState } from 'react'
import Logo from '../../Components/Logo/index'
import { useNavigate } from 'react-router-dom'
import Input from '../../Components/Input/index'
import Button from '../../Components/Button/index'
import { Mail, LockKeyhole, UserRound } from 'lucide-react'
import ErrorMessage from '../../Components/Error Message'

const SignUpPage = () => {

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Password length validation
        if (!password || password.length < 6) {
            setErrorMessage({ message: "Password must be more than 6 characters." });
            return;
        }

        try {
            const res = await axios.post("http://localhost:8000/api/register", {
                username: username,
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
                // Custom error message for user already exists
                if (error.response.status === 409 || error.response.status === 422) {
                    setErrorMessage({ message: "You already have an account, try to login" });
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

            <div className={styles.secondSection}>
                <a onClick={() => { navigate("/login") }}>
                    <div className={`${styles.circle} main-color text-color`}>
                        <h1 className={styles.title}>Login</h1>
                        <p className={styles.sentence}>You don't have an account?</p>
                    </div>
                </a>
            </div>
            <Logo />
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.labels}>
                            <UserRound />
                            <label>Username</label>
                        </div>
                        <Input type="text"
                            name='username'
                            hint='e.g. Joe Doe'
                            onChangeListener={(e) => { setUsername(e.target.value) }} />

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
                        <Input type="password"
                            name='password'
                            hint='********'
                            onChangeListener={(e) => { setPassword(e.target.value) }} />

                        <Button
                            title="Sign up "
                            className={`${styles.btn} main-color text-color`}
                            type="submit"
                        />
                    </form>



                </div>
            </div>

            {errorMessage && (
                <ErrorMessage
                    message={errorMessage.message || errorMessage}
                    errorCode={errorMessage.code}
                    onClose={() => setErrorMessage('')}
                />
            )}
        </div>

    );
}

export default SignUpPage
