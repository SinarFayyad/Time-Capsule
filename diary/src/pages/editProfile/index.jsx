import axios from 'axios'
import React, { useState } from 'react'
import styles from './style.module.css'
import Input from '../../Components/Input'
import Navbar from '../../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/index'
import Footer from '../../Components/Footer/index'
import ErrorMessage from '../../Components/Error Message'
import SuccessMessage from '../../Components/Success Message'

const EditProfile = () => {
 
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const id = localStorage.getItem("id");

    const submitEdits = async (e) => {

        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8000/api/v0.1/updateUser/${id}`, {
                username: username ,
                email: email
            });

            if (res.status === 200) {
                <SuccessMessage message="Profile updated successfully"/>
                navigate('/Profile');
            }

        } catch (error) {
            if (error.response) {
                setErrorMessage({ message: error.message, code: error.response.status });
            }
        }
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                <div className={`${styles.edit} border`}>
                    <h2>Edit Profile</h2>
                    <div className='divider'></div>
                    <div className={styles.inputs}>
                        <div className={styles.labels}>
                            <label>Username</label>

                            <Input type="text"
                                name='username'
                                hint='e.g. Joe Doe'
                                required={false}
                                onChangeListener={(e) => { setUsername(e.target.value) }} />
                        </div>
                        <div className={styles.labels}>
                            <label>Email</label>

                            <Input type="text"
                                name='email'
                                hint='e.g. JoeDoe@gmail.com'
                                required={false}
                                onChangeListener={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <Button
                            title="Save"
                            className={`main-color text-color`}
                            type="submit"
                            onClickListener={submitEdits}
                        />
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
            <Footer />
        </div>
    )
}

export default EditProfile
