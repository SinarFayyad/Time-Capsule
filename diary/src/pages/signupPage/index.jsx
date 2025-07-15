import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Mail, LockKeyhole, UserRound } from 'lucide-react'
import Button from '../../Components/Button/index'
import Input from '../../Components/Input/index'
import Logo from '../../Components/Logo/index'

const SignUpPage = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        console.log("DO Something");
    }, [email]);

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
                    <form>
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
                            onClickListener={async () => {
                                console.log(username, email, password);

                                // const res = await axios.post("signupurl", {
                                //   username: username,
                                //   email: email,
                                //   pass: password,
                                // });

                                if (true) {//if the query is handled right 
                                    // navigate to dashboard
                                    navigate("/mainPage");
                                } else {
                                    // display error on the ui
                                }
                            }}
                        />
                    </form>
                </div>
            </div>


        </div>

    );
}

export default SignUpPage