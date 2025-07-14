import styles from './style.module.css';

const UserMessage = ({ username, message }) => {
    return (
        <>
            <div className={styles.userMessage}>
                <p className={styles.name}>{username}</p>
                
                <br></br>
                <img src="https://via.placeholder.com/150" alt="img placeholder"></img>
                <p className={styles.message}>{message}</p>
            </div>
        </>
    );
}

export default UserMessage