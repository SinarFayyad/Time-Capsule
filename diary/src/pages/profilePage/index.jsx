import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style.module.css';
import Navbar from '../../Components/Navbar/index';
import Button from '../../Components/Button/index'
import Input from '../../Components/Input/index'
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {

    const navigate = useNavigate();
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const id = 1;
    // const id = localStorage.getItem("id");

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/user/${id}`);
            let info = setInfo(response.data.payload);
            setLoading(false);
        } catch (err) {
            setError('Failed to load user data!');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    if (loading) {
        return (
            <div className={styles.container}>
                <Navbar />
                <p className={styles.notification}>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <Navbar />
                <p className={styles.notification} >{error}</p>
            </div>
        );
    }


    const editProfile = async () => {

        try {
            const res = await axios.post(`http://localhost:8000/api/updateUser/${id}`, {
                username: username,
                email: email
            });

            if (res.status === 200) {
                navigate("/Profile");
            }
        } catch {
            setError('Failed to update user data!');
        }
        return (
            <div className={styles.edit}>
                <div>
                    <h1 className={styles.title}>Login</h1>
                    <form onSubmit={editProfile}>
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
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                <div className={`${styles.profileInfo} border`}>
                    <h2>Profile</h2>
                    <div className='divider'></div>
                    <p><strong>Username:</strong> {info.username}</p>
                    <p><strong>Email:</strong> {info.email}</p>
                    <Button title="Edit" className={'main-color text-color'} onClickListener={editProfile}/>
                       
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
