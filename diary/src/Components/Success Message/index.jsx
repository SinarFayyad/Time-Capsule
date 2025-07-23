import styles from './style.module.css'

const SuccessMessage = ({ message }) => {

    return (
        <div className={styles.container}>
            <div className={`${styles.error} main-color`}>
                <h2 className={styles.message}>{message}</h2>
                <button
                    className={styles.closeButton}
                >
                    ×
                </button>
            </div>
        </div>
    );
}
export default SuccessMessage
