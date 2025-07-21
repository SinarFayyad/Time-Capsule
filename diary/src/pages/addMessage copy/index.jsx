import styles from './style.module.css';
import { Smile, Meh, Frown } from 'lucide-react';

const AddMessage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.moodBox}>
          <div className={styles.header}>
            <span>Choose your mood</span>
            <div className={styles.icons}>
              <Smile size={20} />
              <Meh size={20} />
              <Frown size={20} />
            </div>
          </div>
          <textarea placeholder="Write your message" className={styles.textarea} />
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.inputGroup}>
          <label>Select title for your messages</label>
          <input type="text" placeholder="e.g Good memories" />
        </div>

        <div className={styles.inputGroup}>
          <label>Choose the reveal date</label>
          <input type="text" placeholder="MM/DD/YYYY" />
        </div>

        <div className={styles.inputGroup}>
          <label>Select your location</label>
          <input type="text" placeholder="e.g Beirut" />
        </div>

        <div className={styles.inputGroup}>
          <label>Privacy</label>
          <div className={styles.privacyOptions}>
            <label><input type="checkbox" /> Private</label>
            <label><input type="checkbox" /> Public</label>
            <label><input type="checkbox" /> Unlisted</label>
          </div>
        </div>

        <button className={styles.saveButton}>Save message</button>
      </div>
    </div>
  );
};

export default AddMessage;