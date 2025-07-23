import axios from 'axios'
import React, { useState } from 'react'
import styles from './style.module.css'
import Input from '../../Components/Input'
import Navbar from '../../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/index'
import Footer from '../../Components/Footer/index'

const EditProfile = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const id = localStorage.getItem("id");
    const submitEdits = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8000/api/updateUser/${id}`, {
                username: username,
                email: email
            });

            if (res.status === 200) {
                navigate("/profile");
            }
        } catch (error) {
            if (error.response) {
                const backendMessage = error.response.data?.message || '';
                setErrorMessage({ message: error.message, code: error.response.status });
            }
        }
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                <div className={`${styles.edit} border`}>
                    <h1 className={styles.title}>Edit Profile</h1>
                    <form>
                        <div className={styles.labels}>
                            <label>Username</label>

                            <Input type="text"
                                name='username'
                                hint='e.g. Joe Doe'
                                onChangeListener={(e) => { setUsername(e.target.value) }} />
                        </div>
                        <div className={styles.labels}>
                            <label>Email</label>

                            <Input type="text"
                                name='email'
                                hint='e.g. JoeDoe@gmail.com'
                                onChangeListener={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <Button
                            title="Save"
                            className={`${styles.btn} main-color text-color`}
                            type="submit"
                            onClickListener={() => submitEdits}
                        />
                    </form>

                </div>
                {errorMessage && (
                    <ErrorMessage
                        message={errorMessage.message || errorMessage}
                        errorCode={errorMessage.code}
                        onClose={() => setErrorMessage('')}
                    />
                )}
            </div>
            <Footer />
        </div>
    )
}

export default EditProfile
