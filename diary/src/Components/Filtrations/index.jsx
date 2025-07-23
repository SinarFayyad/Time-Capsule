import React from 'react';
import Input from '../Input';
import styles from './style.module.css';
import { useState } from 'react';
import axios from 'axios'
import ErrorMessage from '../../Components/Error Message/index'
import Button from '../Button/index'

const Filtrations = ({ onFilter }) => {

    const [mood, setMood] = useState('');
    const [location, setLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const filter = async (e) => {
        try {
            const response = await axios.post('https://localhost:8000/api/filterMessages', {
                mood: mood,
                location: location
            });
            if (onFilter) {
                onFilter(response.data.payload);
            }
        } catch (error) {
            if (error.response) {
                setErrorMessage({ message: error.message, code: error.response.status });
            }
        }
    }

    return (
        <div className={styles.container}>
            <select
                className={styles.selectMood}
                name="mood"
                defaultValue=""
                onChange={(e) => setMood(e.target.value)}
            >
                <option value="" disabled>
                    Select mood
                </option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="neutral">Neutral</option>
            </select>
            <Input
                type="text"
                name="location"
                hint="Location"
                required={false}
                onChangeListener={(e) => setLocation(e.target.value)}
            />
            <Button
                title="Filter"
                className={`main-color text-color`}
                onClickListener={(e) =>filter()}
            />
            {errorMessage && (
                <ErrorMessage
                    message={errorMessage.message || errorMessage}
                    errorCode={errorMessage.code}
                    onClose={() => setErrorMessage('')}
                />
            )}
        </div>
    );
};

export default Filtrations;
