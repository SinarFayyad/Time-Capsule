import React, { useState, useEffect } from 'react';
import Input from '../Input';
import styles from './style.module.css';
import ErrorMessage from '../../Components/Error Message/index';
import Button from '../Button/index';

const Filtrations = ({ allMessages, onFilter }) => {
  const [mood, setMood] = useState('');
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const filter = () => {
    try {
      let filtered ;

      if (mood !== '') {
        filtered = allMessages.filter((msg) => msg.mood === mood);
      }
      if (location !== '') {
        filtered = allMessages.filter((msg) =>
          msg.location.toLowerCase().includes(location.toLowerCase())
        );
      }

      if (onFilter) {
        onFilter(filtered);
      }
    } catch (error) {
      setErrorMessage('Filtering error');
    }
  };

  useEffect(() => {
    if (mood !== '' || location !== '') {
      filter();
    } else {
      if (onFilter) {
        onFilter(allMessages);
      }
    }
  }, [mood, location, allMessages]);

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
        title="Refresh"
        className={`main-color text-color`}
        onClickListener={() => {
          setMood('');
          setLocation('');
          if (onFilter) {
            onFilter(allMessages);
          }
        }}
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
