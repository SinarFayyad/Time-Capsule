import styles from './style.module.css';


const UserMessage = ({ content }) => {
    return (
        <>
            <div className={`${styles.userMessage} border`}>
                <img src="https://via.placeholder.com/150" alt="img placeholder"></img>
                <p className={styles.message}>{content}</p>
            </div>
        </>
    );
}

export default UserMessage