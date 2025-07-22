import axios from 'axios'
import React, { useState} from 'react'
import styles from './style.module.css'
import Input from '../../Components/Input'
import Navbar from '../../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/index'

const EditProfile = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();
    const id = localStorage.getItem("id");
    const submitEdits = async () => {
        try {
            const res = await axios.post(`http://localhost:8000/api/updateUser/${id}`, {
                username: username,
                email: email
            });

            if (res.status === 200) {
                navigate("/Profile");
            }
        } catch {
            console.log("error");
        }
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.edit}>
                <div>
                    <h1 className={styles.title}>Login</h1>
                    <form onSubmit={submitEdits}>
                        <div className={styles.labels}>
                            <label>Username</label>
                        </div>
                        <Input type="text"
                            name='username'
                            hint='e.g. Joe Doe'
                            onChangeListener={(e) => { setUsername(e.target.value) }} />

                        <div className={styles.labels}>
                            <label>Email</label>
                        </div>
                        <Input type="text"
                            name='email'
                            hint='e.g. JoeDoe@gmail.com'
                            onChangeListener={(e) => { setEmail(e.target.value) }} />

                        <Button
                            title="Login"
                            className={`${styles.btn} main-color text-color`}
                            onClickListener={navigate('/profile')}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProfile