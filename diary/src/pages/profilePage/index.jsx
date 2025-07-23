import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style.module.css';
import Navbar from '../../Components/Navbar/index';
import Button from '../../Components/Button/index'
import Footer from '../../Components/Footer/index'
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {

    const navigate = useNavigate();
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');

    const id = localStorage.getItem("id");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/user/${id}`);
                info = setInfo(res.data.payload);
                setLoading(false);

                if (res.status === 200) {
                    localStorage.setItem('username', info.username);
                    localStorage.setItem('email', info.email);
                }

            } catch (err) {
                setError('Failed to load user data!');
                setLoading(false);
            }
        };
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
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                <div className={`${styles.profileInfo} border`}>
                    <h2>Profile</h2>
                    <div className='divider'></div>
                    <p><strong>Username:</strong> {info.username}</p>
                    <p><strong>Email:</strong> {info.email}</p>
                    <Button title="Edit"
                        className={'main-color text-color'}
                        onClickListener={() => navigate('/editProfile')} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
