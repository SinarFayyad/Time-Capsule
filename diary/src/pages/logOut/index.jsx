import axios from 'axios'
import { useState } from 'react'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/index'
import Footer from '../../Components/Footer/index'
import Button from '../../Components/Button/index'
import ErrorMessage from '../../Components/Error Message'


const LogOut = () => {

    const navigate = useNavigate('');
    const [errorMessage, setErrorMessage] = useState('');

    const logOut = async () => {
        // try {
        //     const res = await axios(`http://localhost:8000/api/v0.1/logout`);

            // if (res.status === 200) {
                localStorage.clear();
                navigate("/");
            //}
        // } catch (error) {
        //     if (error.response) {
        //         setErrorMessage({ message: error.message, code: error.response.status });
        //     }
        // }
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                <div className={`${styles.box} border`}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Log Out</h1>
                    </div>
                    <div className='divider'></div>
                    <p className={styles.text}>Are you sure you want to Log Out?</p>
                    <div className={styles.btns}>
                        <Button title="Yes" className={'main-color text-color'} onClickListener={() => logOut()} />
                        <Button title="No" className={'main-color text-color'} onClickListener={() => navigate('/mainPage')} />
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
    );

}

export default LogOut;
