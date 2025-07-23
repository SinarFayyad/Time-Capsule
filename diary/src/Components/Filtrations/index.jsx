import React from 'react';
import Input from '../Input';
import styles from './style.module.css';

const Filtrations = () => {
  return (
    <div className={styles.container}>
      <select className={styles.selectMood} name="mood" defaultValue="">
        <option value="" disabled>
          Select mood
        </option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="neutral">Neutral</option>
      </select>
      <Input
        type="text"
        name="country"
        hint="Country"
        required={false}
      />
    </div>
  );
};

export default Filtrations;
