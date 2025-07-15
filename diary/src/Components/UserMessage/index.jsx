import styles from './style.module.css';


const UserMessage = ({ message,pic}) => {
    return (
        <>
            <div className={`${styles.userMessage} border`}>
                <img src={pic} alt="img " className='border'></img>
                <p className={styles.message}>{message}</p>
            </div>
        </>
    );
}

export default UserMessage