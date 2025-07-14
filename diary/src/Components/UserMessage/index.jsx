<<<<<<< Updated upstream
import styles from './style.module.css';
=======
import styles from './userMessage.module.css';
>>>>>>> Stashed changes

const UserMessage = ({ username, message }) => {
    return (
        <>
<<<<<<< Updated upstream
            <div className={`${styles.userMessage} border`}>
=======
            <div className={styles.userMessage}>
>>>>>>> Stashed changes
                <img src="https://via.placeholder.com/150" alt="img placeholder"></img>
                <p className={styles.message}>{message}</p>
            </div>
        </>
    );
}

export default UserMessage